import "dotenv/config";
import { Client } from "discord.js"

const client = new Client({
  intents: 0
})

client.on("ready", (c) => {
  console.log(`${c.user.username} is now ready!`)
})

client.on("debug", (d) => {
  console.log(d)
})

client.login(process.env.TOKEN)
