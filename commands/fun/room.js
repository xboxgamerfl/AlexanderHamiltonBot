const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('room')
		.setDescription('Replies with lyrics from The Room Where it Happens'),
	async execute(interaction) {
		await interaction.reply(
			`🎵No one else was in
The room where it happened
The room where it happened
The room where it happened
No one really knows how the game is played
The art of the trade
How the sausage gets made
We just assume that it happens
But no one else is in
The room where it happens.🎵`);
	},
};