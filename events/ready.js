const { Events } = require("discord.js");
const embedded = require("../feature/embedded/embedded");
const getTaskList = require("../feature/query/getTaskList");
const reminder = require("../feature/reminder");
const setSchedule = require("../feature/setSchedule");
module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    setSchedule("0 0 * * *", () => {
      getTaskList
        .then(async (TaskList) => {
          const setEmbeded = await TaskList.map((e) => {
            embedded.addFields({
              name: e.Task,
              value: `${e.time}`,
              inline: true,
            });
          }).then(() => {
            client.channels.cache
              .get("931062873088753684")
              .send({ embeds: [embedded] });
          });
          const setReminder = await TaskList.map((e) => {
            reminder(e.Task, e.time, client);
          });
          console.log(TaskList);
        })
        .catch((error) => console.error(error));
    });
  },
};
