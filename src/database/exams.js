const casual = require('casual')

module.exports = [
  {
    id: 1,
    date: casual.date(),
    duration: casual.double(90, 150),
    database_id: 1,
    question_ids: [1, 3, 4],
    student_ids: [1, 2]
  },
  {
    id: 2,
    date: casual.date(),
    duration: casual.double(90, 150),
    database_id: 1,
    question_ids: [2, 5, 6],
    student_ids: [3, 4]
  },
  {
    id: 3,
    date: casual.date(),
    duration: casual.double(90, 150),
    database_id: 2,
    question_ids: [1, 3, 4, 5],
    student_ids: [1, 2]
  },
  {
    id: 4,
    'date': casual.date(),
    duration: casual.double(90, 150),
    database_id: 2,
    question_ids: [1, 2, 4, 6],
    student_ids: [3, 4]
  }
]
