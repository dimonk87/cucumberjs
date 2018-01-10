module.exports = {

    fields: {
        processName: 'input-name',
        tagsForProcess: 'input-tags',
        ownerForProcess: 'input-owner',
        descriptionForProcess: 'input-description',
        emailSubscribersForErrors: 'input-email_subscribers',
        user: 'input-user',
        password: 'input-password',
        port: 'input-port',
        host: 'input-host',
        dir: 'input-dir',
        localDir: 'input-local_dir',
        caseName: 'input-1-name',
        satisfyRegex: 'input-1-validation_rules-1-value',
        followingActions: 'input-1-processing_rules-1-value'
    },

    buttons: {
        createProcess: 'add-point-button',
        addPoint: 'mat-card:last-of-type [aria-label="Add point"]',
        editProcess: 'mat-row:last-of-type button[tabindex]',
        editPoint: 'mat-card:last-of-type [aria-label="Edit point"]',
        copyProcess: 'mat-row:last-of-type button:first-of-type',
        deleteProcess: 'mat-row:last-of-type .mat-icon-button:last-of-type',
        deletePartnerFirstConfirm: 'fuse-delete-dialog button:first-of-type',
        deletePartnerSecondConfirm: 'fuse-delete-dialog-confirm .mat-button:first-of-type'
    },

    selects: {
        partners: 'input-partners',
        protocol: '#input-protocol',
        direction: '#input-direction',
        encryptionForFtp: '#input-encryption',
        executeTaskEvery: '#input-interval',
        conectionTypeForFtp: '#input-connection_method',
        satisfy: '#input-1-satisfy_type',
        satisfyRegexSelect: '#input-1-validation_rules-1-type_id',
        executeFollowingActions: '#input-1-processing_rules-1-type_id'
    },

    options: {
        firstOption: 'mat-option:nth-of-type(2) .mat-pseudo-checkbox',
        lastOption: 'mat-option:last-of-type',
        firstOptions: 'mat-option:first-of-type',
        fileTransferProtocol: '#mat-option-1',
        fTAM: '#mat-option-4',
        receive: '#mat-option-5',
        send: '#mat-option-6',
        explicitFTPoverTLS: '#mat-option-13',
        useOnlyUnencryptedFTP: 'mat-option-16',
        minutes1: '#mat-option-7',
        anonym: '#mat-option-51',
        all: '#mat-option-17',
        filenameContainsRegex: '#mat-option-19',
        sendEmail: '#mat-option-28'
    },

    elements: {
        lastProcessName: 'mat-row:last-of-type .mat-column-name div',
        interfaceDirection: 'mat-row:last-of-type .mat-column-interface_direction div',
        lastProcessOwner: 'mat-row:last-of-type .mat-column-owner div',
        spinner: 'mat-spinner'
    },

    descriptionForProcess: "This information about with this and this is very impotent",

    chooseDropDownOption: function (selector, option) {
        helpers.clickHiddenElement(selector);
        return helpers.clickHiddenElement(option);
    },

    addProcessingPoint: function (processName, ownerName) {
        driver.wait(until.elementLocated(by.id(page.processPage.buttons.createProcess))).click();
        driver.wait(until.elementLocated(by.id(page.processPage.fields.processName))).sendKeys(processName);
        driver.findElement(by.id(page.processPage.fields.ownerForProcess)).sendKeys(ownerName);
        driver.findElement(by.id(page.processPage.selects.partners)).click();
        driver.wait(until.elementLocated(by.css(page.processPage.options.firstOption))).click();
        driver.findElement(by.id(page.processPage.fields.descriptionForProcess)).sendKeys(page.processPage.descriptionForProcess);
        return driver.findElement(by.id(page.processPage.fields.emailSubscribersForErrors)).sendKeys('admin@admin.com');
    },

    addInterface: function () {
        page.processPage.chooseDropDownOption(page.processPage.selects.protocol, page.processPage.options.fileTransferProtocol);
        driver.findElement(by.id(page.processPage.fields.dir)).sendKeys(Date.now());
        driver.findElement(by.id(page.processPage.fields.port)).sendKeys('21');
        page.processPage.chooseDropDownOption(page.processPage.selects.direction, page.processPage.options.receive);
        driver.findElement(by.id(page.processPage.fields.host)).sendKeys(Date.now());
        page.processPage.chooseDropDownOption(page.processPage.selects.encryptionForFtp, page.processPage.options.useOnlyUnencryptedFTP);
        page.processPage.chooseDropDownOption(page.processPage.selects.executeTaskEvery, page.processPage.options.minutes1);
        driver.findElement(by.id(page.processPage.fields.localDir)).sendKeys(Date.now());
        page.processPage.chooseDropDownOption(page.processPage.selects.conectionTypeForFtp, page.processPage.options.anonym);
        driver.findElement(by.id(page.processPage.fields.user)).sendKeys('admin');
        driver.findElement(by.id(page.processPage.fields.password)).sendKeys('123456');

    },

    addCase: function (caseName) {
        page.processPage.chooseDropDownOption(page.processPage.selects.satisfy, page.processPage.options.all);
        driver.findElement(by.id(page.processPage.fields.caseName)).sendKeys(caseName);
        page.processPage.chooseDropDownOption(page.processPage.selects.satisfyRegexSelect, page.processPage.options.filenameContainsRegex);
        page.processPage.chooseDropDownOption(page.processPage.selects.executeFollowingActions, page.processPage.options.sendEmail);
        driver.wait(until.elementLocated(by.id(page.processPage.fields.followingActions))).sendKeys('admin@admin.com');
        driver.wait(until.elementLocated(by.id(page.processPage.fields.satisfyRegex))).sendKeys('/qwe/');
    },

    editProcess: function (processName, ownerName) {
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.editProcess))).click();
        driver.wait(until.elementLocated(by.id(page.processPage.fields.processName))).clear();
        driver.findElement(by.id(page.processPage.fields.processName)).sendKeys('Change' + processName);
        driver.findElement(by.id(page.processPage.fields.ownerForProcess)).clear();
        driver.findElement(by.id(page.processPage.fields.ownerForProcess)).sendKeys('New' + ownerName);
    },

    deleteCreatedProcess: function () {
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.deleteProcess))).click();
        driver.wait(until.elementLocated(by.css(page.processPage.buttons.deletePartnerFirstConfirm))).click();
        return driver.wait(until.elementLocated(by.css(page.processPage.buttons.deletePartnerSecondConfirm)))
            .then(function () {
                return driver.findElement(by.css(page.processPage.buttons.deletePartnerSecondConfirm)).click();
            }).then(function () {
                return driver.wait(until.elementLocated(by.css('mat-spinner')));
            });
    }
}