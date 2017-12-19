module.exports = function () {


    this.BeforeScenario(function () {
        return helpers.loadPage(shared.testData.url)
            .then(function () {
               return page.apiRequest.loginWithApi();
        }).then(function (token) {
            driver.executeScript(`localStorage.setItem('access_token', '${token}')`);
            driver.executeScript(`localStorage.setItem('user', '{"data":{"id":1,"name":"admin","email":"admin@admin.com","phone":null,"isBlocked":false,"role":{"data":{"id":1,"name":"admin"}}}}')`);
        })
    });

    this.When(/^I open Add user form and fill in all field with valid date$/, function () {
        helpers.loadPage(shared.testData.url + '/users');
        return driver.wait(until.elementLocated(by.css(page.loginPage.elements.firstUser)), 25000)
    });
};