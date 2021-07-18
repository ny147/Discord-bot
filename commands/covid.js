const axios = require(`axios`)
const Discord = require('discord.js');
// const fetch = require('node-fetch')
module.exports = {
    name:`covid`,
    descripton: `Covid command`,
    execute(message,args){

       
        async  function getCovidAPI(){

         
            let responde = await axios.get('https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR0d5DJamUlu_6ydFJaqfj1L4hkoiS42sCVcFNh_PZ1SdD9hcxIsjFRq5-Y');
                     
            return responde.data;
             
         }
    
       
        
        const sendmessage  =    async (message) => {

            let result = await getCovidAPI();


           

        const messageEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`Covid Daily thailand on ${result.UpdateDate}`)
        .setURL('https://covid19.th-stat.com/th')
	    .setDescription('Keep Fighting ! เราต้องรอดไปด้วยกัน')
	    .addFields(
            
        { name: `todayCases`,value : `${result.todayCases}`  },
        { name:`todayDeaths`,value : `${result.todayDeaths}`   },
		{ name: `critical`,value :`${result.critical}` },
        { name:`total case`,value : `${result.cases}`  },
        { name: `recover `,value :`${result.recovered}` }
         
        
       
	    )

            message.channel.send( messageEmbed );
           
        }

        sendmessage(message);
   

        

       


    }

}