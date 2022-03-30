const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Devuelve el avatar del usuario, o el tuyo.')
        .addUserOption(option => option.setName('objetivo').setDescription('Usuario cuyo avatar quieres ver.')),
    async run(client, interaction) {
        const user = interaction.options.getUser('objetivo')
        if (user) {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__mf('avatar.objective', { username: user.username }))
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({ embeds: [embed] })
        } else {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__('avatar.self'))
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({ embeds: [embed] })
        }
    }
}