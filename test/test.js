var server = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var assert = require('assert');
var request = require('request');
chai.use(chaiHttp);

describe("suite", function () {
	
	const authbody = {
			username: 'testuser',
		  	password: 'testpwd',
			grant_type: 'password',
			client_secret: 'null',
			client_id: 'null'};
	
	const authheaders = {
		'content-Type': 'application/x-www-form-urlencoded',
		'type': 'json'
	}
	const host = 'http://127.0.0.1:8080';
	var access_token = "";

	it('register success?', function(done){	
		request.post({url: host + '/auth/registerUser', headers: authheaders, form: authbody},
					 function optionalCallback(err, httpResponse, body) {
						if (err) {
							return console.error(err);
							done();
						}
				console.log('successful!  Server responded with:', body);
			done();
		});
	});
	
	
	it('login should provide bearer token', function(done){	
		request.post({url: host + '/auth/login', headers: authheaders, form: authbody},
					 function optionalCallback(err, httpResponse, body) {
						if (err) {
							return console.error(err);
							done();
						}
			access_token = JSON.parse(body).access_token;
				console.log('successful!  Server responded with:', body);
			done();
		});
	});
	
	it('access to restricted area', function(done){
		var restrictedheaders = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Bearer ' + access_token
		}
		request.post({url: host + '/restrictedArea/enter', headers: restrictedheaders},
					 function optionalCallback(err, httpResponse, body) {
						if (err) {
							return console.error(err);
							done();
						}
			assert.equal('You have gained access to the area', body);
				console.log('successful!  Server responded with:', body);
			done();
		});
	});
	
	
	after(function(){
		
		server.close();
	});
	
});	