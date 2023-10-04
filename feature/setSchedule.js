var cron = require("node-cron");

setSchedule = (crontime, jobfunction) => {
  cron.schedule(crontime, jobfunction, {
    scheduled: true,
    timezone: "Asia/Bangkok",
  });
};
module.exports = setSchedule;
