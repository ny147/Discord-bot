const data =require('./querynotion')
const currentDate = new Date()
const weekMap = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}
let Task = []
const retriveTask = async (Day) =>{
    let Task =[]
    await data(Day).then(  (element) => {
        
        for ( i of element.results){
           
            newTask =  {
                Task:i.properties.Name.title[0].plain_text,
                day:Day,
                time:i.properties.Time.formula.string
            }
            Task.push(newTask)
        }
        
        
    }).then( ()=> {
        const fs = require('fs')
        const path  = './daily.json'
        try {
            fs.writeFileSync(path, JSON.stringify(Task))
          } catch (err) {
            console.error(err)
          }
    })
    
    return Task
}

module.exports =  retriveTask(weekMap[currentDate.getDay()])