const {Client, Intents, Collection} = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n')
const fs = require('fs')

const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.commands = new Collection()

require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);

// client.login(process.env.token)
client.login(config.token)