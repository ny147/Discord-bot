const { Events } = require("discord.js");
const embedded = require("../feature/embedded/embedded");
const getTaskList = require("../feature/query/getTaskList");
const reminder = require("../feature/reminder");
const setSchedule = require("../feature/setSchedule");
const setNotification = (client, ct) => {
  getTaskList()
    .then(async (TaskList) => {
      const setEmbeded = await TaskList.map((e) => {
        embedded
          .addFields({
            name: e.Task,
            value: `${e.time}`,
            inline: true,
          })
          .setTimestamp();
      });

      client.channels.cache
        .get("931062873088753684")
        .send({ embeds: [embedded] })
        .then(() => {
          embedded.spliceFields(0, embedded.length);
        });
      const setReminder = await TaskList.map((e) => {
        reminder(e.Task, e.time, client);
      });
    })
    .catch((error) => console.error(error));
};

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    let ct = 0;
    setNotification(client, ct);

    setSchedule("0 10 * * *", () => {
      setNotification(client);
    });
  },
};
