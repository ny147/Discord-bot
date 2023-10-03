var cron = require("node-cron");

setSchedule = (crontime, jobfunction) => {
  cron.schedule("0 0 * * *", jobfunction, {
    scheduled: true,
    timezone: "Asia/Bangkok",
  });
};
module.exports = setSchedule;
