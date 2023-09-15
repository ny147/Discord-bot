
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
}

module.exports = Remider