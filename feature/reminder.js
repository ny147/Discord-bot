// const fulldate = require('./gettime')

// interval reminder loop
const Remider = (Taskname,Time,client)=>{
	let [hour,minute] = Time.split(':')
	let interval =  setInterval(()=>{
		const date = new Date();
		if(date.getHours() == hour && date.getMinutes() == minute ){
		
        client.channels.cache.get('931062873088753684').send('hello there')
		clearInterval(interval)
		}
		console.log(`${hour} : ${minute}`)
	},1000*60)
    // console.log('hey')
}

// let SmartInterval = require("smartinterval");

// let Remider = (Taskname,Time,cilent) => {
//     // ReminderInterval.start()
//     let [hour,minute] = Time.split(':')
//     let ReminderInterval = new SmartInterval(
//         async () =>{
            
//             const date = new Date();
//             if(date.getHours() == hour && date.getMinutes() == minute ){
            
//                 client.channels.cache.get('931062873088753684').send('hello there')
//                 ReminderInterval.stop()
//             }
//         },
//         6000
//     )
//     ReminderInterval.start()
// }
module.exports = Remider