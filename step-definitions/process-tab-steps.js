module.exports = function () {

    var processName;
    var ownerName;
    var caseName;

    this.Given(/^I am logged in in app as admin$/, function () {
        processName = "Proccess" + Math.floor(Math.random()*1000);
        ownerName = "Owner" + Math.floor(Math.random()*100);
        caseName = "Rule" + Math.floor(Math.random()*100);
        return helpers.loadPage(shared.testData.url)
            .then(function () {
                return page.apiRequest.loginWithApi();
            }).then(function (token) {
                driver.executeScript(`localStorage.setItem('access_token', '${token}')`);
                driver.executeScript(`localStorage.setItem('user', '{"data":{"id":1,"name":"admin","email":"admin@admin.com","phone":null,"isBlocked":false,"role":{"data":{"id":1,"name":"admin"}}}}')`);
            })
    });

    //Create new processing point
    this.When(/^I field in all required fields$/, function () {
        helpers.loadPage(shared.testData.url + '/points');
        page.processPage.addProcessingPoint(processName, ownerName);
        page.processPage.addInterface();
        page.processPage.addCase(caseName);
    });
    this.When(/^I click button for create process$/, function () {
        helpers.clickHiddenElement(page.processPage.buttons.addPoint);
    });
    this.Then(/^I should see created processing point$/, function () {
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.createProcess)));
        page.loginPage.checkErrors(page.processPage.elements.lastProcessName, processName);
        return page.loginPage.checkErrors(page.processPage.elements.interfaceDirection, 'FTP - Receive');
    });
    this.Then(/^I delete created process with API$/, function () {
        return page.apiRequest.getIdUser('/api/comm-processes')
            .then(function (lastUserId) {
                var urlDelete = shared.testData.url + '/api/comm-processes/' + lastUserId;
                return page.apiRequest.deleteCreatedUserWithApi(urlDelete);
            })
    });


}