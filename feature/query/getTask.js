const data =require('./querynotion')
let Task = []
const retriveTask = async (Day) =>{
    let Task =[]
    await data(Day).then(  (element) => {
         
        //   e.results.forEach(element => {
        //     console.log(element.properties.Name.title[0].plain_text)
        //     newTask =  {
        //         Task:element.properties.Name.title[0].plain_text,
        //         day:Day,
        //         time:element.properties.Time.formula.string
        //     }
        //     Task.push(newTask)
        // })
        
        for ( i of element.results){
            // i
            newTask =  {
                Task:i.properties.Name.title[0].plain_text,
                day:Day,
                time:i.properties.Time.formula.string
            }
            Task.push(newTask)
        }
        
        
    })
    return Task
}

// console.log(retriveTask('Monday'))
module.exports =  retriveTask