module.exports = [
  {
    id: 1,
    database_id: 1,
    question_id: 1,
    text: 'Select * from cars where date_created >= 2017-01-01 and kilometres > 100000'
  },
  {
    id: 2,
    database_id: 1,
    question_id: 2,
    text: 'Select * from cars where door_count > 4 or top_speed > 200'
  },
  {
    id: 3,
    database_id: 1,
    question_id: 3,
    text: 'Select * from cars t1 join owners t2 on t1.owner_id = t2.id where t2.city = ‘Rijeka’'
  },
  {
    id: 4,
    database_id: 1,
    question_id: 4,
    text: 'Select distinct(model) from cars where car_brand = ‘Audi’'
  },
  {
    id: 5,
    database_id: 1,
    question_id: 5,
    text: 'Select count(*) from cars t1 join owners t2 on t1.owner_id = t2.id where t2.proffesional  = true'
  },
  {
    id: 6,
    database_id: 1,
    question_id: 6,
    text: 'Select t2.name, count(*) from cars t1 join owners t2 on t1.owner_id = t2.id  group by t2.id desc'
  },
  {
    id: 7,
    database_id: 2,
    question_id: 7,
    text: 'SELECT * FROM boats'
  },
  {
    id: 8,
    database_id: 2,
    question_id: 8,
    text: 'SELECT * FROM boats WHERE mileage>10000'
  },
  {
    id: 9,
    database_id: 2,
    question_id: 9,
    text: 'SELECT * FROM cars'
  },
  {
    id: 10,
    database_id: 2,
    question_id: 10,
    text: 'SELECT * FROM cars WHERE owners>2'
  },
  {
    id: 11,
    database_id: 2,
    question_id: 11,
    text: 'SELECT * FROM boats'
  },
  {
    id: 12,
    database_id: 2,
    question_id: 12,
    text: 'SELECT * FROM boats WHERE mileage>10000'
  }
]
