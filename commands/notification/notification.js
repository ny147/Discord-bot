const {SlashCommandBuilder,EmbedBuilder} = require('discord.js') 
// const remindSchema = 

module.exports = {
    data : new SlashCommandBuilder()
    .setName('remind')
    .setDescription('test'),
    async execute (interaction){

        console.log(interaction.user.id)

    }
}