#Please run script create_table_SC before run this script
#Please be aware that all your data will be erasered
#Insert value for membership

INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','silver',1,528);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','silver',6,1851);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','silver',12,3385);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','silver',18,4078);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','gold',1,628);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','gold',6,2391);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','gold',12,3805);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','gold',18,5008);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','platinum',1,728);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','platinum',6,3931);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','platinum',12,4425);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('player','platinum',18,6138);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','silver',1,328);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','silver',6,851);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','silver',12,1385);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','silver',18,2078);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','gold',1,428);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','gold',6,1091);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','gold',12,1805);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','gold',18,2308);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','platinum',1,528);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','platinum',6,1931);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','platinum',12,2425);
INSERT INTO sport_club.membership(type,card_level,session,price) VALUES ('owner','platinum',18,3838);

#select * from sport_club.membership;

#Insert value for sport

INSERT INTO sport_club.sport(name,slot,image) VALUES ('Football',22,'speaker9.jpeg');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Tennis',4,'speaker10.png');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Boxing',2,'speakerboxing.jpeg');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Badminton',4,'speakerbatminton.jpeg');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Volleyball',12,'speakervolley.png');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Basketball',10,'speakerbasket.jpeg');
INSERT INTO sport_club.sport(name,slot,image) VALUES ('Table tenis',4,'speakertabletenis.jpeg');

#select * from sport_club.sport;

#Insert value for center_yard_status

INSERT INTO sport_club.center_yard_status(status_name) VALUES ('Available');
INSERT INTO sport_club.center_yard_status(status_name) VALUES ('Maintenance');
INSERT INTO sport_club.center_yard_status(status_name) VALUES ('Closed');
INSERT INTO sport_club.center_yard_status(status_name) VALUES ('Coming Soon');

#select * from sport_club.center_yard_status;

#Insert value for team_group

INSERT INTO sport_club.team_group(team_group_name) VALUES ('Marketing');
INSERT INTO sport_club.team_group(team_group_name) VALUES ('Sale');
INSERT INTO sport_club.team_group(team_group_name) VALUES ('Finance');
INSERT INTO sport_club.team_group(team_group_name) VALUES ('Human Resource');

#select * from sport_club.team_group;

#Insert value for role

INSERT INTO sport_club.role(role_name) VALUES ('Administrator');
INSERT INTO sport_club.role(role_name) VALUES ('Manager');
INSERT INTO sport_club.role(role_name) VALUES ('Staff');

#select * from sport_club.role;

#Insert value for user_account

INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('linhnguyen','mylinh_nguyen55@gmail.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Linh','Nguyen','1990-05-21','+0123456123','523A Do Xuan Hop','Ho Chi Minh','Vietnam',1);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('nhile','leyennhi274@gmail.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Nhi','Le','1991-03-21','+0123456123','523A Do Xuan Hop','Ho Chi Minh','Vietnam',1);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('rickyvu','ricky_vu@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Ricky','Vu','1989-02-21','+0123456123','20 Nguyen Dang Giai','Ho Chi Minh','Vietnam',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('tringo','tri.ngo@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Tri','Ngo','1983-05-21','+0123456123','11 Mac Dinh','Ho Chi Minh','Vietnam',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('duyngo','duy.ngo@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Duy','Ngo','1987-05-21','+0123456123','21 Ton Duc Thang','Ho Chi Minh','Vietnam',3);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('jaywallace','jay_wallace@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Jay','Wallace','1987-05-21','+0123456123','61 Bridge St','Kington','United Kingdom',3);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('camerongill','cameron_gill@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Cameron','Gill','1990-05-21','+0123456123','Vennstraße 40','Gütersloh','Germany',3);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('noelschwartz','schwartz@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Noel','Schwartz','1985-04-28','+0123456123','Östergötland County','Östergötland','Sweden',3);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('bretduke','bret_duke@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Bret','Duke','1985-04-28','+0123456123','Herrevägen 1','Jokkmokk','Sweden',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('rayleethomas','raylee_thomas@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Raylee','Thomas','1985-04-28','+0123456123','414 Larose Ave','The Pas','Canada',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('maddoxcooke','maddox_cooke@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Maddox','Cooke','1985-04-28','+0123456123','Route de Limet 80','Modave','Belgium',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('jadenevans','jaden_evans@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Jaden','Evans','1985-04-28','+0123456123','Rue Madame Thonus Joie','Rue Madame Thonus Joie','Belgium',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('logannichols','logan_nichols@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Logan','Nichols','1985-04-28','+0123456123','Chemin de la Vieille Chapelle 21','Durbuy','Belgium',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('ryanchristian','ryan_christian@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Ryan','Christian','1985-04-28','+0123456123','214 Route des Ponts dArian, 41250','Tour-en-Sologne','France',2);
INSERT INTO sport_club.user_account(user_name,email,password,first_name,
last_name,date_of_birth,phone,address,city,country,category) 
VALUES ('silvergibbs','silver_gibbs@mailicator.com','$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.','Silver','Gibbs','1985-04-28','+0123456123','Chemin de la Vieille Chapelle 21','Durbuy','Belgium',3);

#select * from sport_club.user_account; 

#Insert value for Contract

INSERT INTO sport_club.contract(user_account_id,membership_id,create_date,create_by,sent_date,sent_by,approved_date,approved_by
,signed_date,signed_by,start_date,end_date)
VALUES (3,3,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2018-07-01','2019-07-01')
; 
INSERT INTO sport_club.contract(user_account_id,membership_id,create_date,create_by,sent_date,sent_by,approved_date,approved_by
,signed_date,signed_by,start_date,end_date)
VALUES (4,3,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2019-07-24 22:52:44',1,'2019-01-01','2020-06-01'); 

INSERT INTO sport_club.contract(user_account_id,membership_id,create_date,create_by,sent_date,sent_by,approved_date,approved_by
,signed_date,signed_by,start_date,end_date)
VALUES (5,15,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-01-01','2020-06-01'); 

INSERT INTO sport_club.contract(user_account_id,membership_id,create_date,create_by,sent_date,sent_by,approved_date,approved_by
,signed_date,signed_by,start_date,end_date)
VALUES (6,22,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-07-24 22:52:44',2,'2019-01-01','2020-06-01'); 
#select * from contract;

#Insert value for Center
INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('Body Elite Sport Center', '348 Court St', 'Brooklyn','USA','+1 718-935-0088','places.singleplatform.com',6);

INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('Club Sport NY', '31-11 Broadway', 'Astoria','USA','+1 718-545-0004','',6);

INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('24 Hour Sport Center', '153 E 53rd St', 'Astoria','USA','+1 212-401-0660','',6);

INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('Planet Sport Center', '423 W 55th St', 'New York','USA','+1 212-336-0750','',6);

INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('Retro Sport Center', '1 New York Plaza', 'Manhattan','USA','+1 646-741-1768','',6);

INSERT INTO sport_club.center(name,address,city,country,phone,website,user_account_id)
VALUES ('Sheraton New York Sport Center', '811 7th Ave', 'New York','USA','+1 718-545-0004','',6);

#select * from sport_club.center

#Insert value for Yard
INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 1','1','1');

INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 2','1','2');

INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 3','1','3');

INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 4','1','4');

INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 5','1','4');

INSERT INTO sport_club.yard(name,center_id,sport_id)
VALUES ('Body Elite 6','1','7');

#Insert value for Schedule
#1 yard cannot have same part_of_day same schedule_date

INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('1','1','2019-08-05','8:00','11:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('1','2','2019-08-05','13:00','16:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('1','3','2019-08-05','17:00','20:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('2','1','2019-08-05','8:00','11:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('2','2','2019-08-05','13:00','16:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('2','3','2019-08-05','17:00','20:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('3','1','2019-08-05','8:00','11:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('3','2','2019-08-05','13:00','16:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('3','3','2019-08-05','17:00','20:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('4','1','2019-08-05','8:00','11:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('4','2','2019-08-05','13:00','16:00');
INSERT INTO sport_club.schedule(yard_id,part_of_day,schedule_date,start_time, end_time)
VALUES ('4','3','2019-08-05','17:00','20:00');

#select * from schedule;


#Insert value for Booking
#1 player cannot have same date same slot at 2 yards
#booking date < schedule_date

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('3','2','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('3','3','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('3','4','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('4','2','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('4','9','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('9','8','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('10','7','2019-07-25');

INSERT INTO sport_club.booking(user_account_id, schedule_id, booked_date)
VALUES ('12','5','2019-07-25');


#select * from booking
