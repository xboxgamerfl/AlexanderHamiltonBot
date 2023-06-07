const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yorktown')
		.setDescription('Replies with lyrics from Yorktown'),
	async execute(interaction) {
		await interaction.reply(
			`🎵I imagine death so much it feels more like a memory
This is where it gets me: on my feet
The enemy ahead of me
If this is the end of me, at least I have a friend with me
Weapon in my hand, a command, and my men with me
Then I remember my Eliza's expecting me...
Not only that, my Eliza's expecting
We gotta go, gotta get the job done
Gotta start a new nation, gotta meet my son!
Take the bullets out your gun!🎵`);
	},
};