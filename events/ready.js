const { Events } = require('discord.js');
const embedded = require('../feature/embedded/embedded')
module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		// client
		client.channels.cache.get('931062873088753684').send({ embeds: [embedded] })
		console.log(`Ready! Logged in as ${client.user.tag}`);
		
	},
};