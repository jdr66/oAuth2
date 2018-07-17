var server = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var request = require('request');
chai.use(chaiHttp);


it('should contain bearer token', function(done){
	
	
	var req = {
     host: 'http://127.0.0.1:8080',
     path: 'auth/login',
     method: 'POST',
     headers: {
		'content-Type': 'application/x-www-form-urlencoded',
		'type': 'json'
     }
 	};
	
	var body = {
			username: 'joris',
		  	password: 'testpwd',
			grant_type: 'password',
			client_secret: 'null',
			client_id: 'null'};
	var headers = {
		'content-Type': 'application/x-www-form-urlencoded',
		'type': 'json'
	}
	request.post({url: 'http://127.0.0.1:8080/auth/login', headers: headers, body: JSON.stringify(body)},
				 function optionalCallback(err, httpResponse, body) {
  					if (err) {
    					return console.error(err);
						done();
  					}
  			console.log('successful!  Server responded with:', body);
		done();
	});
});