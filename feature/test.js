// const Task = require('./query/getTask')
// console.log(Task('Monday').then( e => console.log(e)))
const schedule = require('node-schedule')

const job = schedule.scheduleJob('53 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
  });
job