module.exports = {

    fields: {
        processName: 'input[formcontrolname=name]',
        tagsForProcess: 'input[formcontrolname=tags]',
        ownerForProcess: 'input[formcontrolname=owner]',
        descriptionForProcess: '[formcontrolname=description]',
        emailSubscribersForErrors: '[formcontrolname=email_subscribers]',
        user: '[placeholder="User"]',
        password: '[placeholder="Password"]',
        port: '[placeholder="Port"]',
        host: '[placeholder="Host"]',
        dir: '[placeholder="Dir"]',
        localDir: '[placeholder="Local dir"]',
        caseName: '[placeholder="Case name"]',
        satisfyRegex: 'fuse-row:first-of-type [placeholder="Value"]',
        followingActions: 'fuse-row:nth-of-type(2) [placeholder="Value"]'
    },

    buttons: {
        createProcess: 'button[id=add-point-button]',
        addPoint: 'mat-card:last-of-type [aria-label="Add point"]',
        editProcess: 'mat-row:last-of-type button[tabindex]',
        editPoint: 'mat-card:last-of-type [aria-label="Edit point"]',
        copyProcess: 'mat-row:last-of-type button:first-of-type',
        deleteProcess: 'mat-row:nth-last-of-type(2) button:last-of-type',
        deletePartnerFirstConfirm: 'fuse-delete-dialog button:first-of-type',
        deletePartnerSecondConfirm: 'fuse-delete-dialog-confirm .mat-button:first-of-type'
    },

    selects: {
        partners: '[aria-label=Partners]',
        protocol: '[aria-label="Protocol..."]',
        direction: '[aria-label="Direction..."]',
        encryptionForFtp: '[formcontrolname=encryption]',
        executeTaskEvery: '[aria-label="Execute task every"]',
        conectionTypeForFtp: '[aria-label="Connection type FTP/SFTP..."]',
        satisfy: '[aria-label="Satisfy select"]',
        satisfyRegexSelect: 'fuse-row:first-of-type [aria-label="Select"]',
        executeFollowingActions: 'fuse-row:nth-of-type(2) [aria-label="Select"'
    },

    options: {
        firstOption: 'mat-option:nth-of-type(2) .mat-pseudo-checkbox',
        lastOption: 'mat-option:last-of-type',
        firstOptions: 'mat-option:first-of-type'
    },

    elements: {
        lastProcessName: 'mat-row:last-of-type .mat-column-name div',
        interfaceDirection: 'mat-row:last-of-type .mat-column-interface_direction div'
    },

    descriptionForProcess: "This information about with this and this is very impotent",

    chooseDropDownOption: function (selector, option) {
        helpers.clickHiddenElement(selector);
        return helpers.clickHiddenElement(option);
    },

    addProcessingPoint: function (processName, ownerName) {
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.createProcess))).click();
        driver.wait(until.elementLocated(by.css(page.processPage.fields.processName))).sendKeys(processName);
        driver.findElement(by.css(page.processPage.fields.ownerForProcess)).sendKeys(ownerName);
        driver.findElement(by.css(page.processPage.selects.partners)).click();
        driver.wait(until.elementLocated(by.css(page.processPage.options.firstOption))).click();
        driver.findElement(by.css(page.processPage.fields.descriptionForProcess)).sendKeys(page.processPage.descriptionForProcess);
        return driver.findElement(by.css(page.processPage.fields.emailSubscribersForErrors)).sendKeys('admin@admin.com');
    },

    addInterface: function () {
        page.processPage.chooseDropDownOption(page.processPage.selects.protocol, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.dir)).sendKeys(Date.now());
        driver.findElement(by.css(page.processPage.fields.port)).sendKeys('21');
        page.processPage.chooseDropDownOption(page.processPage.selects.direction, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.host)).sendKeys(Date.now());
        page.processPage.chooseDropDownOption(page.processPage.selects.encryptionForFtp, page.processPage.options.lastOption);
        page.processPage.chooseDropDownOption(page.processPage.selects.executeTaskEvery, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.localDir)).sendKeys(Date.now());
        page.processPage.chooseDropDownOption(page.processPage.selects.conectionTypeForFtp, page.processPage.options.lastOption);
        driver.findElement(by.css(page.processPage.fields.user)).sendKeys('admin');
        driver.findElement(by.css(page.processPage.fields.password)).sendKeys('123456');

    },

    addCase: function (caseName) {
        page.processPage.chooseDropDownOption(page.processPage.selects.satisfy, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.caseName)).sendKeys(caseName);
        page.processPage.chooseDropDownOption(page.processPage.selects.satisfyRegexSelect, page.processPage.options.firstOptions);
        //driver.wait(until.elementLocated(by.css(page.processPage.fields.satisfyRegex))).sendKeys('/qwe/');
        page.processPage.chooseDropDownOption(page.processPage.selects.executeFollowingActions, page.processPage.options.firstOptions);
        driver.wait(until.elementLocated(by.css(page.processPage.fields.followingActions))).sendKeys('admin@admin.com');
        driver.wait(until.elementLocated(by.css(page.processPage.fields.satisfyRegex))).sendKeys('/qwe/');
    },

    // addRules: function (selector, option, value, valurSelector) {
    //     page.processPage.chooseDropDownOption(selector, option);
    //     return driver.findElement(by.css(valurSelector)).sendKeys(value);
    // }
}