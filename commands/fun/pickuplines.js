const { SlashCommandBuilder } = require('discord.js');

const lines = [
	'On a scale of 1 to America, how free are you tonight?',
	'My flag will never fly at half mast as long as you are around.',
	'You remind me of the Constitution, because you look like a national treasure.',
	'Baby I can last for waaaayyyy more than 2 terms.',
	'I will go full-term in your oval office.',
	'The grand jury in my pants is waiting to try you.',
	'They call my bedroom the 14th colony.',
	'Are you a pilgrim? Because I\'d let you land on my rock. Plymouth\'s got nothing on me if you know what I mean.',
	'If you were president, you\'d be George Washington. I\'ll always come second.',
	'Are you Aaron Burr? Because you\'ve shot me right through the heart with your good looks.',
	'I could write 51 constitutional articles about why I need you.',
	'Are you happiness? Because the Declaration of Independence wants me to pursue you.',
	'History\'s not the only one with its eyes on you.',
	'Oceans rise, empires fall, but my boner for you stands so tall.',
	'I\'m not throwin\' away my (cum) shot!',
	'Just like King George, once I have you, I\'ll never let you go.',
	'"I will never be satisfied" until I\'m with you.',
	'If it takes fighting a war for us to meet, it will have been worth it.',
	'My name is Alexander Hamilton and there\'s a million things I haven\'t done. So just you wait, just you wait 😉',
	'You strike me as a woman who\'s never been satisfied.',
	'We move under the covers and we move as one.',
	'Federalist papers and chill?',
	'I\'m a trust fund, baby, you can trust me.',
	'I look into your eye\'s and the sky\'s the limit.',
	'When our children tell our story, they\'ll tell the story of tonight.',
	'Girl are you a ten? Cuz I\'m a ten. ($10 bill)',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pickupline')
		.setDescription('Replies with some of the sexiest pickup lines you will ever hear in America'),
	async execute(interaction) {
		await interaction.reply(lines[Math.floor(Math.random() * lines.length)]);
	},
};