const { Events } = require("discord.js");
const embedded = require("../feature/embedded/embedded");
const retriveTask = require("../feature/query/retriveTask");
const Reminder = require("../feature/reminder");
module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    // set reminder
    retriveTask.then(async (TaskList) => {
      await TaskList.forEach((e) => {
        Reminder(e.Task, e.time, client);
        embedded.addFields({ name: e.Task, value: `${e.time}`, inline: true });
      });
      client.channels.cache
        .get("931062873088753684")
        .send({ embeds: [embedded] });
    });
  },
};
