const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nonstop')
		.setDescription('Replies with lyrics from Non Stop'),
	async execute(interaction) {
		await interaction.reply(
			`🎵Why do you always say what you believe?
Why do you always say what you believe?
Every proclamation guarantees
Free ammunition for your enemies

Why do you write like it's going out of style?
Write day and night like it's going out of style?
Every day you fight like it's going out of style
Do what you do🎵`);
	},
};