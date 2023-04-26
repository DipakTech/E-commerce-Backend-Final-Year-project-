import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dipak Giri',
    email: 'dipak@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'krishna hari',
    email: 'krishna@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'mohan lal',
    email: 'mohan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'suresh kumar',
    email: 'suresh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'roshan bhandari',
    email: 'roshanbhandari@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'hari chauhan',
    email: 'chauhanhari@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'traversy john',
    email: 'traversy@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'santosh sharma',
    email: 'santoshsharma@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'bikash parajuli',
    email: 'parajulibikash@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'rabi shrestha',
    email: 'shrrabi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ram bahadur kuwar',
    email: 'kuwarram@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'dikesh thap',
    email: 'thapadikesh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'janak magar',
    email: 'janak123@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'sisir poudel',
    email: 'sisirpo@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'kamana poudel',
    email: 'kamanapoudel12@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'rekha lamichhane',
    email: 'lamichhanerekha@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'rabin tamang',
    email: 'rabintamang@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ranjana kunwar',
    email: 'ranku@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ramesh pandey',
    email: 'ramesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'sandeep lamichhane',
    email: 'sandeeplami@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
