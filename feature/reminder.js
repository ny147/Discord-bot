// interval reminder loop
const Reminder = (Taskname,Time,client)=>{

	// let interval =  setInterval(()=>{
	// 	const date = new Date();
	// 	if(date.getHours() == hour && date.getMinutes() == minute ){
		
    //     client.channels.cache.get('931062873088753684').send(`Hey It's time to start ${Taskname} Finish your Job!`)
	// 	clearInterval(interval)
	// 	}
	// },1000*60)
	const date = new Date()
	let [hour,minute] = Time.split(':')
	let Targetduration = (hour* 3600000) +  (minute*60000)
	let NowDuration  = (date.getHours()* 3600000 + date.getMinutes()*60000)
	
	if((Targetduration - NowDuration) > 0){
		let timeout = setTimeout(
			()=>{
				
				client.users.cache.get('481828170924818432').send(`Hey It's time to start ${Taskname} Finish your Job!`);
				console.log(`${hour}:${minute}`)
			},
			Targetduration - NowDuration
		)
	}else {
		console.log(`too late for ${Taskname}`)
	}
}

module.exports = Reminder