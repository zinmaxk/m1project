#Please be aware that all your data will be erasered
DROP TABLE IF EXISTS sport_club.booking;
DROP TABLE IF EXISTS sport_club.schedule;
DROP TABLE IF EXISTS sport_club.yard;
DROP TABLE IF EXISTS sport_club.center;
DROP TABLE IF EXISTS sport_club.sport;
DROP TABLE IF EXISTS sport_club.center_yard_status;
DROP TABLE IF EXISTS sport_club.contract;
DROP TABLE IF EXISTS sport_club.user_account_group;
DROP TABLE IF EXISTS sport_club.user_account;
DROP TABLE IF EXISTS sport_club.player;
DROP TABLE IF EXISTS sport_club.owner;
DROP TABLE IF EXISTS sport_club.team_group;
DROP TABLE IF EXISTS sport_club.role;
DROP TABLE IF EXISTS sport_club.membership;


CREATE TABLE sport_club.membership (
id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(25) NOT NULL,
card_level VARCHAR(25) NOT NULL, #silver,gold,platinum,diamond,centuryon
session INT NOT NULL, #1,3,6,12,18
price INT NOT NULL,
currency VARCHAR(45) NULL DEFAULT 'usd',
note VARCHAR(225) NULL,
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));


CREATE TABLE sport_club.user_account (
id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR(16) NOT NULL,
email VARCHAR(32) NOT NULL,
password VARCHAR(64) NOT NULL,
first_name VARCHAR(45) NOT NULL,
last_name VARCHAR(45) NOT NULL,
date_of_birth DATE NULL,
phone VARCHAR(45) NULL,
address VARCHAR(45) NULL,
city VARCHAR(45) NULL,
country VARCHAR(45) NULL,
valid TINYINT NOT NULL DEFAULT 0,
category TINYINT NOT NULL DEFAULT 1, #1 for Internal Staff, 2 for Player, 3 for Owner
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
UNIQUE (user_name));

CREATE TABLE sport_club.center_yard_status (
id INT NOT NULL AUTO_INCREMENT,
status_name VARCHAR(45) NOT NULL, #Available, Maintenance,Closed,Coming Soon
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

CREATE TABLE sport_club.center (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
address VARCHAR(225) NOT NULL,
city VARCHAR(45) NOT NULL,
country VARCHAR(45) NOT NULL,
time_open TIME NOT NULL DEFAULT '8:00:00',
time_close TIME NOT NULL DEFAULT '20:00:00',
phone VARCHAR(45) NOT NULL,
website VARCHAR(100) NULL,
user_account_id INT NOT NULL, #user_account.category = 3
create_date DATETIME NULL,
status_id INT NOT NULL DEFAULT '1',
valid TINYINT NOT NULL DEFAULT 0, #0 for active 1 for inactive
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`user_account_id`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`status_id`) REFERENCES `sport_club`.`center_yard_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE sport_club.sport (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(65) NOT NULL,
slot INT NOT NULL,
image VARCHAR(65) NOT NULL,
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

CREATE TABLE sport_club.yard (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(65) NOT NULL, #cannot be same yard name for one center
create_date DATETIME NULL,
center_id INT NOT NULL,
sport_id INT NOT NULL,
status_id INT NOT NULL DEFAULT '1',
valid TINYINT NOT NULL DEFAULT 0, #0 for active 1 for inactive
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`center_id`) REFERENCES `sport_club`.`center` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`sport_id`) REFERENCES `sport_club`.`sport` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`status_id`) REFERENCES `sport_club`.`center_yard_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE sport_club.schedule (
id INT NOT NULL AUTO_INCREMENT,
yard_id INT NOT NULL,
part_of_day INT NOT NULL DEFAULT '1', #1: 8:00 - 11:00 2:13:00 - 16:00 3:17:00 - 20:00
schedule_date DATE NOT NULL,
start_time TIME NOT NULL,
end_time TIME NOT NULL,
schedule_status INT NOT NULL DEFAULT '0', #0: Scheduled, 1: Canceled, 2: Full, 3: Finish
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`yard_id`) REFERENCES `sport_club`.`yard` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE sport_club.booking (
id INT NOT NULL AUTO_INCREMENT,
user_account_id INT NOT NULL,
schedule_id INT NOT NULL,
booked_date DATETIME NULL,
cancel_date DATETIME NULL,
booking_status INT NOT NULL DEFAULT '0', #1: Booked, 2: Denied
insert_timestamp TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`user_account_id`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`schedule_id`) REFERENCES `sport_club`.`schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE sport_club.role (
id INT NOT NULL AUTO_INCREMENT ,
role_name VARCHAR(45) NOT NULL, #Administrator, Manager, Sale, Support
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

CREATE TABLE sport_club.team_group (
id INT NOT NULL AUTO_INCREMENT,
team_group_name VARCHAR(65) NOT NULL, #Administrator, Marketing, Sale, Support
insert_timestamp TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id));

CREATE TABLE sport_club.user_account_group (
id INT NOT NULL AUTO_INCREMENT,
user_account_id INT NOT NULL,
team_group_id INT NOT NULL,
role_id INT NOT NULL,
insert_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`user_account_id`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`team_group_id`) REFERENCES `sport_club`.`team_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`role_id`) REFERENCES `sport_club`.`role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);


CREATE TABLE sport_club.contract (
id INT NOT NULL AUTO_INCREMENT,
user_account_id INT NOT NULL,
membership_id INT NOT NULL,
create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
create_by INT NOT NULL,
sent_date DATETIME NULL,
sent_by INT NULL,
approved_date DATETIME NULL,
approved_by INT NULL,
signed_date DATETIME NULL,
signed_by INT NULL,
rejected_date DATETIME NULL,
rejected_by INT NULL,
start_date DATETIME NOT NULL,
end_date DATETIME NOT NULL,
note VARCHAR(225) NULL,
insert_timestamp TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (`user_account_id`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`membership_id`) REFERENCES `sport_club`.`membership` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`create_by`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`sent_by`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`approved_by`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`signed_by`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (`rejected_by`) REFERENCES `sport_club`.`user_account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);
