// CRUD 
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log('id', id)
// console.log('id timestamp', id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to DB')
  }

  // console.log('Connected correctly!')
  const db = client.db(databaseName)
  // db.collection('users').findOne({ _id: new ObjectID("5d338cd0432af719c70f217a")}, (error, user) => {
  //   if(error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 36}).toArray((error, users) => {
  //   if(error) {
  //     return console.log('unable to fetch')
  //   }
  //   console.log('users', users)
  // })

  // db.collection('users').find({ age: 36}).count((error, count) => {
  //   if(error) {
  //     return console.log('unable to fetch')
  //   }
  //   console.log('count', count)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID("5d33917387406d19f7a302e3")}, (error, task) => {
  //   console.log('task', task)
  // })

  // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
  //   console.log('tasks', tasks)
  // })

  // db.collection('users').insertOne({
  //   name: 'Kian',
  //   age: 30,
  //   _id: id
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert user')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   { name: 'Hesam', age: 41},
  //   { name: 'Shoora', age: 37}
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert document')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {description: 'Clean the house', completed: true},
  //   {description: 'Renew inspection', completed: false},
  //   {description: 'Pot plants', completed: false}
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert document')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').updateOne({ _id: new ObjectID("5d338e6be6ed6e19d20bdda9")}, {
  //   $set: {
  //    name: 'Giti'
  //   }
  // }).then((result) => {
  //   console.log('result', result)
  // }).catch((error)=> {
  //   console.log('error', error)
  // })

  // db.collection('users').updateOne({ _id: new ObjectID("5d338e6be6ed6e19d20bdda9")}, {
  //   $inc: {
  //    age: 62
  //   }
  // }).then((result) => {
  //   console.log('result', result)
  // }).catch((error)=> {
  //   console.log('error', error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // }) 

  // modifiedCount: 1,
  // matchedCount: 1 


  // db.collection('users').deleteMany({
  //   age: 36
  // }).then((result) => {
  //   console.log('result', result)
  // }).catch((error) => {
  //   console.log('error', error)
  // })

  // db.collection('tasks').deleteOne({
  //   description: 'Clean the house'
  // }).then((result) => {
  //   console.log('result', result)
  // }).catch((error) => {
  //   console.log('error', error)
  // })
}) 
