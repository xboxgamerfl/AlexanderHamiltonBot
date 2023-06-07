const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('notothis')
		.setDescription('Replies with lyrics from No To This'),
	async execute(interaction) {
		await interaction.reply(
			`🎵Then I said, "Well, I should head back home"
She turned red, she led me to her bed
Let her legs spread and said
Stay
Hey
Hey
That's when I began to pray
Lord, show me how to say no to this
I don't know how to say no to this
But my God, she looks so helpless
And her body's saying, "Hell, yes"🎵`);
	},
};