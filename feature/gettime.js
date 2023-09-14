
const fulldate = require('../dailyTask.json')
let day,time;
const currentDate = new Date()
const weekMap = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}

const getTask = (fulldate) =>{
        let Task = []
        fulldate.forEach(element => {
    
        let datesplit = element.date.split(" ")
        const dt = new Date(datesplit[0])
        day = dt.toLocaleDateString("en-US", { weekday: 'long' })
        if(weekMap[currentDate.getDay()].toLocaleLowerCase() == day.toLocaleLowerCase()){
            Task.push(
                {
                    'name':element.task,
                    'day':day,
                    'time':datesplit[1]
                }
            )
        }
        
        
    });

    return Task 
}
module.exports = getTask(fulldate)