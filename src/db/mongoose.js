const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true 
})

const User = mongoose.model('User', {
  name: {
    type: String
  }, 
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Behrooz',
//   age: 'dsdsd'
// })

// me.save().then(() => {
//   console.log('me', me)
// }).catch((error) => {
//   console.log('error', error)
// })

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  description: 'Learn the mongoose library',
  type: false
})

task.save().then(() => {
  console.log('task', task)
}).catch((error) => {
  console.log('error', error)
})