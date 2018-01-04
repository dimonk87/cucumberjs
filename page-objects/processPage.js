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
        host: '[formcontrolname=host]',
        dir: '[formcontrolname=dir]',
        localDir: '[formcontrolname=local_dir]',
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
        direction: '[formcontrolname=direction]',
        encryptionForFtp: '[formcontrolname=encryption]',
        executeTaskEvery: '[formcontrolname=interval]',
        conectionTypeForFtp: '[formcontrolname=connection_method]',
        satisfy: '[formcontrolname="satisfy_type"]',
        satisfyRegexSelect: '[formarrayname=validation_rules] [formcontrolname=type_id]',
        executeFollowingActions: '[formarrayname=processing_rules] [formcontrolname=type_id]'
    },

    options: {
        firstOption: 'mat-option:nth-of-type(2) .mat-pseudo-checkbox',
        lastOption: 'mat-option:last-of-type',
        firstOptions: 'mat-option:nth-of-type(1)'
    },

    descriptionForProcess: "This information about with this and this is very impotent",

    chooseDropDownOption: function (selector, option) {
        driver.findElement(by.css(selector)).click();
        return driver.wait(until.elementLocated(by.css(option))).click();
    },

    addProcessingPoint: function (processName, ownerName) {
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.createProcess))).click();
        driver.wait(until.elementLocated(by.css(page.processPage.fields.processName))).sendKeys(processName);
        driver.findElement(by.css(page.processPage.fields.ownerForProcess)).sendKeys(ownerName);
        page.processPage.chooseDropDownOption(page.processPage.selects.partners, page.processPage.options.firstOption);
        driver.findElement(by.css(page.processPage.fields.descriptionForProcess)).sendKeys(page.processPage.descriptionForProcess);
        return driver.findElement(by.css(page.processPage.fields.emailSubscribersForErrors)).sendKeys('admin@admin.com');
    },

    addInterface: function () {
        helpers.clickHiddenElement(page.processPage.selects.protocol);
        return helpers.clickHiddenElement(page.processPage.options.firstOptions);
        // page.processPage.chooseDropDownOption(page.processPage.selects.protocol, page.processPage.options.firstOptions);
    }
}