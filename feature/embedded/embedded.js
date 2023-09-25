const { EmbedBuilder } = require("discord.js");

// inside a command, event listener, etc.
const StartEmbed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Daily Habit")
  .setURL(
    "https://www.notion.so/dff43897c5484289b56257d2fd2773ef?v=9458b5ac08854530b5e6aa531afc64ba"
  )
  .setAuthor({
    name: "Start Today with fresh body!",
    iconURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png",
    url: "https://www.notion.so/dff43897c5484289b56257d2fd2773ef?v=9458b5ac08854530b5e6aa531afc64ba",
  })
  .setDescription(`Let's start today!! with this TaskList`)
  .setThumbnail("https://media.giphy.com/media/J3w29yVdPFND0xlN3F/giphy.gif")
  .setImage("https://media.giphy.com/media/4oj3Nr3ALQlzvv6r1v/giphy.gif")
  .setTimestamp();
// .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = StartEmbed;
