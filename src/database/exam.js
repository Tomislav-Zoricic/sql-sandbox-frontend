module.exports = {
  name: '2 Ciklus baze podataka',
  duration: 95,
  databaseId: 1,
  questions: [
    {
      id: 1,
      database_id: 1,
      question: 'Select all cars that are not older than 10 years and have more than 100k km.',
      answer: 'Select * from cars where date_created >= 2017-01-01 and kilometres > 100000',
      rank: 'easy'
    },
    {
      id: 2,
      database_id: 1,
      question: 'Select * all cars that have more than 4 doors or have top speed over 200 km/h',
      answer: 'Select * from cars where door_count > 4 or top_speed > 200',
      rank: 'easy'
    },
    {
      id: 3,
      database_id: 1,
      question: 'Select all cars that belong to owners from city Rijeka',
      answer: 'Select * from cars t1 join owners t2 on t1.owner_id = t2.id where t2.city = ‘Rijeka’',
      rank: 'medium'
    },
    {
      id: 4,
      database_id: 1,
      question: 'Select all the Audi models (without duplicates)',
      answer: 'Select distinct(model) from cars where car_brand = ‘Audi’',
      rank: 'medium'
    },
    {
      id: 5,
      database_id: 1,
      question: 'Get the count of cars whose owners are professional drivers',
      answer: 'Select count(*) from cars t1 join owners t2 on t1.owner_id = t2.id where t2.proffesional  = true',
      rank: 'hard'
    },
    {
      id: 6,
      database_id: 1,
      question: 'Get all the owners and count of their cars ordered descending',
      answer: 'Select t2.name, count(*) from cars t1 join owners t2 on t1.owner_id = t2.id  group by t2.id desc',
      rank: 'hard'
    }
  ]
}
