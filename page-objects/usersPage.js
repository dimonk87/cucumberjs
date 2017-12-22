//var userName = "user" + Math.floor(Math.random()*1000);
//var userEmail = "mail" + Math.floor(Math.random()*1000) + "@mail.com";
//var userPassword = "password" + Math.floor(Math.random()*100);
var userPhone = Math.floor(Math.random()*1000) + "-" + Math.floor(Math.random()*1000);

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

    userName: "user" + Math.floor(Math.random()*1000),
    userEmail: "mail" + Math.floor(Math.random()*1000) + "@mail.com",
    userPassword: "password" + Math.floor(Math.random()*100),

    createNewUser: function () {
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.addUserButton))).click();
        driver.wait(until.elementLocated(by.css(page.usersPage.elements.userNameField))).sendKeys(page.usersPage.userName);
        driver.findElement(by.css(page.usersPage.elements.userEmailField)).sendKeys(page.usersPage.userEmail);
        driver.findElement(by.css(page.usersPage.elements.userPasswordField)).sendKeys(page.usersPage.userPassword);
        driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(userPhone);
        driver.findElement(by.css(page.usersPage.elements.selectUserRole)).click();
        driver.findElement(by.css(page.usersPage.elements.selecktRoleManager)).click();
        driver.findElement(by.css(page.usersPage.elements.userPhoneField)).sendKeys(userPhone);
        return driver.findElement(by.css(page.usersPage.elements.addUserButton)).click();
    }



};