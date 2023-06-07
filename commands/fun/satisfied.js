const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('satisfied')
		.setDescription('Replies with lyrics from Satisfied'),
	async execute(interaction) {
		await interaction.reply(
			`🎵To your union! (To the union, to the revolution)
And the hope that you provide
(You provide, you provide)
May you always (always)

Be satisfied (satisfied, satisfied, satisfied)
And I know (be satisfied, be satisfied, be satisfied)
She'll be happy as his bride (satisfied, satisfied, satisfied)
And I know (be satisfied, satisfied, satisfied, satisfied)

He will never be satisfied
I will never be satisfied🎵`);
	},
};