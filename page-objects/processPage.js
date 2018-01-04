module.exports = {

    fields: {
        processName: 'input[formcontrolname=name]',
        tagsForProcess: 'input[formcontrolname=tags]',
        ownerForProcess: 'input[formcontrolname=owner]',
        descriptionForProcess: '[formcontrolname=description]',
        emailSubscribersForErrors: '[formcontrolname=email_subscribers]',
        user: '[formcontrolname=user]',
        password: '[formcontrolname=password]',
        port: '[formcontrolname=port]',
        host: '[placeholder="Host"]',
        dir: '[placeholder="Dir"]',
        localDir: '[placeholder="Local dir"]',
        caseName: '[formarrayname=rule_sets] [formcontrolname=name]',
        satisfyRegex: '[formarrayname=validation_rules] [formcontrolname=value]',
        followingActions: '[formarrayname=processing_rules] [formcontrolname=value]'
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
        conectionTypeForFtp: '[formcontrolname=connection_method]',
        satisfy: '[formcontrolname="satisfy_type"]',
        satisfyRegexSelect: '[formarrayname=validation_rules] [formcontrolname=type_id]',
        executeFollowingActions: '[formarrayname=processing_rules] [formcontrolname=type_id]'
    },

    options: {
        firstOption: 'mat-option:nth-of-type(2) .mat-pseudo-checkbox',
        lastOption: 'mat-option:last-of-type',
        firstOptions: 'mat-option:first-of-type'
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
        page.processPage.chooseDropDownOption(page.processPage.selects.direction, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.host)).sendKeys(Date.now());
        page.processPage.chooseDropDownOption(page.processPage.selects.encryptionForFtp, page.processPage.options.lastOption);
        page.processPage.chooseDropDownOption(page.processPage.selects.executeTaskEvery, page.processPage.options.firstOptions);
        driver.findElement(by.css(page.processPage.fields.localDir)).sendKeys(Date.now());
    },

    addCase: function () {
        page.processPage.chooseDropDownOption(page.processPage.selects.)
    }
}