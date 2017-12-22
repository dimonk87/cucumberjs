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

    //Create new user
    this.When(/^I open Add user form and fill in all field with valid date$/, function () {
        helpers.loadPage(shared.testData.url + '/users');
        return page.usersPage.createNewUser();
    });
    this.Then(/^I should see created user$/, function () {
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.addUserButton)));
        return page.loginPage.checkErrors(page.usersPage.elements.lastUserName, ' ' + page.usersPage.userName);
    });
    this.Then(/^I delete created user with api$/, function () {
        return page.apiRequest.getIdUser()
            .then(function (lastUserId) {
                var urlDelete = shared.testData.url + '/api/users/' + lastUserId;
                return page.apiRequest.deleteCreatedUserWithApi(urlDelete);
            })
    });

    //Edit created user
    this.Given(/^I have created user with api$/, function () {

    });


};