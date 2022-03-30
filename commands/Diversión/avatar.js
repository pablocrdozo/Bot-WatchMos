const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Devuelve el avatar del usuario, o el tuyo.')
        .addUserOption(option => option.setName('objetivo').setDescription('Usuario cuyo avatar quieres ver.')),
    async run(interaction) {
        const user = interaction.options.getUser('objetivo')
        if (user) {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(`El avatar de ${user.username} es:`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({ embeds: [embed] })
        } else {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(`Tu avatar es:`)
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({ embeds: [embed] })
        }
    }
}