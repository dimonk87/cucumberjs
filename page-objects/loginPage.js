module.exports = {

    elements: {
        emailField: by.css('input[placeholder="Email"]'),
        passwordField: by.css('input[placeholder="Password"]'),
        submitButton: by.css('.submit-button'),
        firstUser: 'mat-row:first-of-type mat-cell:nth-of-type(2)',
        loginTitle: '.title',
        errorMessage: 'mat-error'
    },

    loginFunction: function (userEmail, userPassword) {
        driver.wait(until.elementLocated(page.loginPage.elements.emailField)).sendKeys(userEmail);
        driver.wait(until.elementLocated(page.loginPage.elements.passwordField)).sendKeys(userPassword);
        return driver.findElement(page.loginPage.elements.submitButton).click();
    },

    checkErrors: function (selectElement, errorText) {
        return driver.wait(until.elementsLocated(by.css(selectElement))).then(function () {
            return helpers.getAttributeValue(selectElement, 'innerHTML');
        }).then((element)=>{
            expect(element).to.equal(errorText);
        });
    },

    checkExist: function (selectElement, errorText) {
        return driver.wait(until.elementsLocated(by.css(selectElement))).then(function () {
            return helpers.getAttributeValue(selectElement, 'innerHTML');
        }).then((element)=>{
            expect(element).to.not.equal(errorText);
        });
    }
};