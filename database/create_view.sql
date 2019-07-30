#View of Admin Info
CREATE OR REPLACE VIEW sport_club.admin_info_view AS 
SELECT ua.first_name
, ua.last_name
, ua.date_of_birth
, ua.phone
, ua.address
, ua.city
, ua.country
, role.role_name
, tg.team_group_name
FROM user_account ua
LEFT JOIN user_account_group uag ON uag.user_account_id = ua.id
LEFT JOIN role ON role.id = uag.role_id
LEFT JOIN team_group tg ON tg.id = uag.team_group_id
WHERE ua.id = 1;


#View of Player
CREATE OR REPLACE VIEW sport_club.player_view AS 
SELECT ua.id
, ua.first_name
, ua.last_name
, ua.date_of_birth
, ua.phone
, ua.address
, ua.city
, ua.country
, CASE  WHEN ua.valid = 0 THEN "Active"
		WHEN ua.valid = 1 THEN "Inactive"
  END AS valid
, ua.insert_timestamp as created_date
FROM user_account ua
WHERE ua.category = 2;

#View of Owner
CREATE OR REPLACE VIEW sport_club.owner_view AS 
SELECT ua.id
, ua.first_name
, ua.last_name
, ua.date_of_birth
, ua.phone
, ua.address
, ua.city
, ua.country
, CASE  WHEN ua.valid = 0 THEN "Active"
		WHEN ua.valid = 1 THEN "Inactive"
  END AS valid
, ua.insert_timestamp as created_date
FROM user_account ua
WHERE ua.category = 3;

#View of Contract Player

CREATE OR REPLACE VIEW sport_club.contract_player_view AS 
SELECT con.id as contract_id
, con.user_account_id
, ua.first_name
, ua.last_name
, mem.type AS membership_type
, mem.card_level
, mem.session
, mem.price
, mem.currency
, con.start_date
, con.end_date
, con.create_date
, CONCAT(uac.first_name," ",uac.last_name) as create_by
, con.sent_date
, CONCAT(uas.first_name," ",uas.last_name) as sent_by
, con.approved_date
, CONCAT(uas.first_name," ",uaa.last_name) as approved_by
, con.signed_date
, CONCAT(uasign.first_name," ",uasign.last_name) as signed_by
, con.rejected_date
, CONCAT(uarej.first_name," ",uarej.last_name) as rejected_by
FROM sport_club.contract con
INNER JOIN user_account ua on con.user_account_id = ua.id
LEFT JOIN user_account uac on con.create_by = uac.id
LEFT JOIN user_account uas on con.sent_by = uas.id
LEFT JOIN user_account uaa on con.approved_by = uaa.id
LEFT JOIN user_account uasign on con.signed_by = uasign.id
LEFT JOIN user_account uarej on con.rejected_by = uarej.id
INNER JOIN membership mem on con.membership_id = mem.id
WHERE ua.category = 2;


#View of Contract Owner

CREATE OR REPLACE VIEW sport_club.contract_owner_view AS 
SELECT con.id as contract_id
, con.user_account_id
, ua.first_name
, ua.last_name
, mem.type AS membership_type
, mem.card_level
, mem.session
, mem.price
, mem.currency
, con.start_date
, con.end_date
, con.create_date
, CONCAT(uas.first_name," ",uac.last_name) as create_by
, con.sent_date
, CONCAT(uas.first_name," ",uas.last_name) as sent_by
, con.approved_date
, CONCAT(uas.first_name," ",uaa.last_name) as approved_by
, con.signed_date
, CONCAT(uasign.first_name," ",uasign.last_name) as signed_by
, con.rejected_date
, CONCAT(uarej.first_name," ",uarej.last_name) as rejected_by

FROM sport_club.contract con
INNER JOIN user_account ua on con.user_account_id = ua.id
LEFT JOIN user_account uac on con.create_by = uac.id
LEFT JOIN user_account uas on con.sent_by = uas.id
LEFT JOIN user_account uaa on con.approved_by = uaa.id
LEFT JOIN user_account uasign on con.signed_by = uasign.id
LEFT JOIN user_account uarej on con.rejected_by = uarej.id
INNER JOIN membership mem on con.membership_id = mem.id
WHERE ua.category = 3;

#View of membership

CREATE OR REPLACE VIEW sport_club.membership_view AS 
SELECT mem.type
, mem.card_level
, mem.session
, mem.price
, mem.currency
FROM membership mem;

#View of Member Info

CREATE OR REPLACE VIEW sport_club.member_info_view AS 
SELECT ua.first_name
, ua.last_name
, ua.date_of_birth
, ua.phone
, ua.address
, ua.city
, ua.country
, mem.type AS membership_type
, mem.card_level
, mem.session
, mem.price
, mem.currency
, con.start_date
, con.end_date
, con.create_date
FROM user_account ua
LEFT JOIN contract con on con.user_account_id = ua.id
LEFT JOIN membership mem on con.membership_id = mem.id
WHERE ua.id = 3;

#View of List of center

CREATE OR REPLACE VIEW sport_club.center_view AS 
SELECT cen.id
, cen.name
, cen.time_open
, cen.time_close
, cen.phone
, cen.website
, cen.address
, cen.city
, cen.country
, CASE  WHEN cen.valid = 0 THEN "Active"
		WHEN cen.valid = 1 THEN "Inactive"
  END AS valid
, cys.status_name
FROM center cen
INNER JOIN user_account ua on cen.user_account_id = ua.id
INNER JOIN center_yard_status cys on cys.id = cen.status_id
WHERE ua.id = 6;

#View of List of yard

CREATE OR REPLACE VIEW sport_club.yard_view AS 
SELECT yard.id as yard_id
, yard.name as yard_name
, sport.name as sport_name
, sport.slot
, cen.name as center_name
, cen.time_open
, cen.time_close
, cen.phone
, cen.website
, cen.address
, cen.city
, cen.country
, CASE  WHEN yard.valid = 0 THEN "Active"
		WHEN yard.valid = 1 THEN "Inactive"
  END AS valid
, cys.status_name
FROM yard
INNER JOIN center cen on cen.id = yard.center_id 
INNER JOIN user_account ua on cen.user_account_id = ua.id
INNER JOIN center_yard_status cys on cys.id = yard.status_id
INNER JOIN sport on sport.id = yard.sport_id
WHERE ua.id = 6;

#View of Schedule

CREATE OR REPLACE VIEW sport_club.schedule_view AS 
SELECT yard.id as yard_id
, yard.name as yard_name
, sport.name as sport_name
, sport.slot
, slot_booked.booked
, sport.image as sport_image
, sch.schedule_date
, sch.start_time
, sch.end_time
, CASE  WHEN sch.schedule_status = 0 THEN "Scheduled"
		WHEN sch.schedule_status = 1 THEN "Canceled"
        WHEN sch.schedule_status = 2 THEN "Full"
        WHEN sch.schedule_status = 3 THEN "Finish"
  END AS schedule_status
, cen.name as center_name
, cen.phone
, cen.website
, cen.address
, cen.city
, cen.country
FROM schedule sch
INNER JOIN yard on yard.id = sch.yard_id
INNER JOIN center cen on cen.id = yard.center_id 
INNER JOIN sport on sport.id = yard.sport_id
LEFT JOIN (SELECT schedule_id, COUNT(*) as booked FROM booking WHERE booking_status = 0 GROUP BY schedule_id) as slot_booked on slot_booked.schedule_id = sch.id;

#View of Booking

CREATE OR REPLACE VIEW sport_club.booking_view AS 
SELECT CONCAT(ua.first_name," ",ua.last_name) as user_name
, yard.id as yard_id
, yard.name as yard_name
, sport.name as sport_name
, sport.slot
, slot_booked.booked
, sport.image as sport_image
, sch.schedule_date
, sch.start_time
, sch.end_time
, cen.name as center_name
, cen.phone
, cen.website
, cen.address
, cen.city
, cen.country
, book.booking_status
FROM booking book
INNER JOIN user_account ua on book.user_account_id=ua.id
INNER JOIN schedule sch on sch.id = book.schedule_id
INNER JOIN yard on yard.id = sch.yard_id
INNER JOIN center cen on cen.id = yard.center_id 
INNER JOIN sport on sport.id = yard.sport_id
LEFT JOIN (SELECT schedule_id, COUNT(*) as booked FROM booking WHERE booking_status = 0 GROUP BY schedule_id) as slot_booked on slot_booked.schedule_id = book.schedule_id;

 
select schedule_id, count(*) from booking group by schedule_id