var unirest = require('unirest');
var token;


module.exports = {



    loginWithApi: function () {
        return new Promise(function(resolve, reject) {
            unirest.post(shared.testData.url + '/api/auth/login')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .send({'email': shared.testData.userEmail, 'password': shared.testData.password})
                .end(function(response) {
                    token = response.body.access_token;
                    resolve(token);
                });
        })
    },
    
    getIdUser: function () {
        return new Promise(function (resolve, reject) {
            unirest.get(shared.testData.url + '/api/users')
                .header({'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
                .end(function(response) {
                    resolve(response.body.data[response.body.data.length - 1].id);
                });
        })
    },

    deleteCreatedUserWithApi: function (url) {
        unirest.delete(url)
            .header({'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
            .end(function () {
                return console.log(url);
            })
    },
    
    createUserWithApi: function (userName, userEmail) {
        unirest.post(shared.testData.url + '/api/users')
            .header({'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
            .send({'email': userEmail, 'isBlocked': false, 'name': userName, 'password': page.usersPage.userPassword, 'phone': page.usersPage.userPhone, 'role': 3})
            .end(function (response) {
                console.log(response.body);
                return response.data;
            })
    }
};