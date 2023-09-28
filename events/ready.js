const { Events } = require("discord.js");
const embedded = require("../feature/embedded/embedded");
const getTaskList = require("../feature/query/getTaskList");
const Reminder = require("../feature/reminder");
module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    // set reminder
    getTaskList.then(async (TaskList) => {
      await TaskList.map((e) => {
        embedded.addFields({ name: e.Task, value: `${e.time}`, inline: true });
        Reminder(e.Task, e.time, client);
      });
      client.channels.cache
        .get("931062873088753684")
        .send({ embeds: [embedded] });
    });
  },
};
