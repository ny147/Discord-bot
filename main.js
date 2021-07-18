const Discord = require('discord.js');
const fetch = require('node-fetch')

const client = new Discord.Client();
const prefix = '!';

const fs = require('fs');
client.commands = new Discord.Collection();



   
const commandFiles = fs.readdirSync('./commands/').filter(file =>  file.endsWith(`.js`));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name,command);
}






client.once("ready",() => {

    console.log(`${client.user.tag} has join to this server`);

})





client.on('message',async (message) => {

    if(!message.content.startsWith(prefix) || message.author.bot )
        return;


    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        client.commands.get(`hello`).execute(message,args);
       
    }else if(command === 'covid'){
        
        client.commands.get(`covid`).execute(message,args);
		
    }
 
})
client.login('ODY1NDc1NjQyMTE5MTU5ODA4.YPEjAA.yX4g-lz0QfT7MKCFeuCC8FwiVEs');