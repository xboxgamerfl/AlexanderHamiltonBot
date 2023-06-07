const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beback')
		.setDescription('Replies with lyrics from You\'ll be back'),
	async execute(interaction) {
		await interaction.reply(
			`🎵Da-da-da, dat-da, dat, da-da-da, da-ya-da
Da-da, dat, dat, da-ya-da
Da-da-da, dat-da, dat, da-da-da, da-ya-da
Da-da, dat, dat, da-ya🎵`);
	},
};