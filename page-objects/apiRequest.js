var unirest = require('unirest');
var ls = require('local-storage');
var token;

module.exports = {



    loginWithApi: function () {
        return new Promise(function(resolve, reject) {
            unirest.post(shared.testData.url + '/api/auth/login')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .send({'email': shared.testData.userEmail, 'password': shared.testData.password})
                .end(function(response) {
                    resolve(response.body.access_token)
                });
        })
    }
};