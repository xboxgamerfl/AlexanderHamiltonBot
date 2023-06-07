const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('myshot')
		.setDescription('Replies with lyrics from My Shot'),
	async execute(interaction) {
		await interaction.reply(
			`🎵I am not throwing away my shot
I am not throwing away my shot
Hey yo, I'm just like my country
I'm young, scrappy, and hungry
And I'm not throwing away my shot🎵`);
	},
};