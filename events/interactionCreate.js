module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isCommand()) return
        
        const command = client.commands.get(interaction.commandName)

        if (!command) return
        
        try {
            await command.run(interaction)
        } catch(e) {
            console.error(e)
            return interaction.reply({ content: 'Ha surgido un error al ejecutar el comando'})
        }
    }
}