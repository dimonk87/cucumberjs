module.exports = function () {

    this.BeforeScenario(function () {
        return helpers.loadPage(shared.testData.url);
    })

    //Logged in successfull
    this.When(/^I logged in on page$/, function () {
        return page.loginPage.loginFunction(shared.testData.userEmail, shared.testData.password);
    });
    this.Then(/^I should see "([^"]*)"$/, function (title) {
        return page.loginPage.checkErrors(page.loginPage.elements.firstUser, title);
    });

    //I see login page
    this.Then(/^I should see title "([^"]*)"$/, function (title) {
        return page.loginPage.checkErrors(page.loginPage.elements.loginTitle, title);
    });

    //Try to log in with empty fields
    this.When(/^I don't fill in fields$/, function () {
        return page.loginPage.loginFunction('', '');
    });
    this.Then(/^I shouldn't be able to click$/, function () {
        var loginButton = '.submit-button';
        return driver.wait(until.elementLocated(by.css(loginButton)));
    });

    //Check validation
    this.When(/^I fill in fields with incorrect data$/, function () {
        var emailIncorrect = "mail" + Math.floor(Math.random()*100) + "@mail.com";
        var passwordIncorrect = Math.floor(Math.random()*100);
        return page.loginPage.loginFunction(emailIncorrect, passwordIncorrect);
    });
    this.Then(/^I shoul see an error message "([^"]*)"$/, function (title) {
        return page.loginPage.checkErrors(page.loginPage.elements.errorMessage, title);
    });


};
