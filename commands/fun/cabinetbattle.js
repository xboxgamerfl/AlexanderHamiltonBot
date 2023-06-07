const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cabinetbattle')
		.setDescription('Replies with lyrics from Cabinet Battle #2'),
	async execute(interaction) {
		await interaction.reply(
			`🎵You must be out of your GODDAMNED mind
If you think
The president is gonna bring the nation to the brink
Of meddling in the middle of a military mess
A game of chess
Where France is queen and king-less
We've signed a treaty with a king
Who's head is now in a basket
Would you like to take it out and ask it?
"Oh should we honor our treaty King Louis head?"
"Uh do whatever you want, I'm super dead!"🎵`);
	},
};