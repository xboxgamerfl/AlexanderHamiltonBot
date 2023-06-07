const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gunsandships')
		.setDescription('Replies with lyrics from Guns and Ships'),
	async execute(interaction) {
		await interaction.reply(
			`🎵Lafayette!
I go to France for more funds
Lafayette!
I come back with more guns
And ships
And so the balance shifts
We rendezvous with Rochambeau, consolidate their gifts
We can end this war at Yorktown, cut them off at sea, but
For this to succeed, there is someone else we need
I know
Hamilton!🎵`);
	},
};