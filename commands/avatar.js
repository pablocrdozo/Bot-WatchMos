const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Devuelve el avatar del usuario, o el tuyo.')
        .addUserOption(option => option.setName('objetivo').setDescription('Usuario cuyo avatar quieres ver.')),
    async run(interaction) {
        const user = interaction.options.getUser('objetivo')
        if (user) return interaction.reply(`El avatar de ${user.username} es: ${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
        return interaction.reply(`Tu avatar es: ${interaction.user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
    }
}