const { DateTime } = require("luxon");

let [hour, minute] = [
  DateTime.now().setZone("Asia/Bangkok").hour,
  DateTime.now().setZone("Asia/Bangkok").minute,
];
console.log(hour, minute);
// const { error } = require("console");
// const data = require("./feature/query/querynotion");
// data("Sunday")
//   .then((e) => {
//     if (e.results.length === 0) {
//       throw "No element";
//       return 0;
//     } else {
//       console.log("what");
//     }
//   })
//   .catch((error) => console.log(error));
