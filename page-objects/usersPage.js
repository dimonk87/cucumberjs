module.exports = {

    elements: {
        userNameField: 'input[formcontrolname=name]',
        userEmailField: 'input[formcontrolname=email]',
        userPasswordField: 'input[formcontrolname=password]',
        userPhoneField: 'input[formcontrolname=phone]',
        createUserButton: 'button[id=add-user-button]',
        addUserButton: '[aria-label="Add user"]',
        editUserButton: 'button[aria-label="Edit user"]',
        selectUserRole: 'mat-select.mat-select',
        selecktRoleManager: 'mat-option[role=option]:nth-of-type(2)',
        selektList: '.mat-select-content',
        editUserIcon: 'mat-row:last-of-type [tabindex="0"]',
        deleteUserIcon: 'mat-row:last-of-type button:last-of-type',
        deleteUserFirstConfirm: 'fuse-delete-dialog .mat-dialog-actions button:first-of-type',
        deleteUserSecondConfirm: 'fuse-delete-dialog-confirm .mat-dialog-actions .mat-button:first-of-type',
        lastUserName: 'mat-row:last-of-type .mat-column-name'
    },

    //userName: "user" + Math.floor(Math.random()*1000),
    //userEmail: "mail" + Math.floor(Math.random()*1000) + "@mail.com",
    userPassword: "password" + Math.floor(Math.random()*100),
    userPhone: Math.floor(Math.random()*1000) + "-" + Math.floor(Math.random()*1000),


    createNewUser: function (userName, userEmail) {
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.addUserButton))).click();
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.userNameField))).sendKeys(userName);
        driver.findElement(by.css(page.usersPage.elements.userEmailField)).sendKeys(userEmail);
        driver.findElement(by.css(page.usersPage.elements.userPasswordField)).sendKeys(page.usersPage.userPassword);
        driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(page.usersPage.userPhone);
        driver.findElement(by.css(page.usersPage.elements.selectUserRole)).click();
        driver.findElement(by.css(page.usersPage.elements.selecktRoleManager)).click();
        driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(page.usersPage.userPhone);
        return driver.findElement(by.css(page.usersPage.elements.addUserButton)).click();
    },

    editCreatedUser: function (userName) {
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.editUserIcon))).click();
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.userNameField))).clear();
        driver.findElement(by.css(page.usersPage.elements.userNameField)).sendKeys('Change ' + userName);
        driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(page.usersPage.userPhone);
        return driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(page.usersPage.userPhone).then(function () {
            return driver.findElement(by.css(page.usersPage.elements.editUserButton)).click();
        });
    },

    deleteCreatedUser: function () {
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.deleteUserIcon))).click();
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.deleteUserFirstConfirm))).click();
        return driver.wait(until.elementLocated(by.css(page.usersPage.elements.deleteUserSecondConfirm)))
            .then(function () {
            return driver.findElement(by.css(page.usersPage.elements.deleteUserSecondConfirm)).click();
        }).then(function () {
            return driver.wait(until.elementLocated(by.css('mat-spinner')));
        });
    }

};