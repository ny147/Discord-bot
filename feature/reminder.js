const { DateTime } = require("luxon");
const Reminder = (Taskname, Time, client) => {
  const date = DateTime.now().setZone("Asia/Bangkok");
  let [hour, minute] = Time.split(":");
  let Targetduration = hour * 3600000 + minute * 60000;
  let NowDuration = date.hour * 3600000 + date.minute * 60000;
  console.log(
    `${Taskname} current -> ${date.hour}:${date.minute} , target ->${Time}`
  );
  if (Targetduration - NowDuration > 0) {
    let timeout = setTimeout(() => {
      client.channels.cache
        .get("931062873088753684")
        .send(`😉 Hey.. It's time to start ${Taskname} Finish your Job!`);
      console.log(`${hour}:${minute}`);
    }, Targetduration - NowDuration);
  } else {
    client.channels.cache
      .get("931062873088753684")
      .send(`too late for ${Taskname} 😨`);
  }
};

module.exports = Reminder;
