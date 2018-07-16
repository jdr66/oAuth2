CREATE DATABASE `oAuth2Test`;
CREATE TABLE `access_tokens` (
  `user_id` mediumint(9) DEFAULT NULL,
  `access_token` varchar(50) DEFAULT NULL
);
CREATE TABLE `users` (
  `user_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);



