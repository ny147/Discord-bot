const { DateTime } = require("luxon");

console.log(DateTime.now().setZone("Asia/Bangkok").weekday);
