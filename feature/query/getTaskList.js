const { error } = require("console");
const data = require("./querynotion");
const { DateTime } = require("luxon");
const weekMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const olddate = DateTime.now().setZone("Asia/Bangkok");
const compareTaskByTime = (a, b) => {
  const timeA = a.time.split(":");
  const timeB = b.time.split(":");

  const hourComparison = parseInt(timeA[0]) - parseInt(timeB[0]);
  if (hourComparison === 0) {
    return parseInt(timeA[1]) - parseInt(timeB[1]);
  }
  return hourComparison;
};

const getTaskList = async (d) => {
  let Task = [];
  const currentDate = DateTime.now().setZone("Asia/Bangkok");
  let Day = weekMap[currentDate.weekday];
  await data(Day)
    .then((element) => {
      if (element.results.length === 0) throw "No Task";
      for (i of element.results) {
        Task.push({
          Task: i.properties.Name.title[0].plain_text,
          day: Day,
          time: i.properties.Time.formula.string,
        });
      }
    })
    .then(() => {
      const fs = require("fs");
      const path = "./daily.json";
      try {
        fs.writeFileSync(path, JSON.stringify(Task));
      } catch (err) {
        console.error(err);
      }
    })
    .catch((error) => console.error(error));

  Task.sort(compareTaskByTime);

  return Task;
};

module.exports = getTaskList;
