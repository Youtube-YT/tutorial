const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "your bot token",
prefix: "?"
})
bot.onMessage()

bot.command({
name: "ping",
code: `Pong, $ping Ms`})
