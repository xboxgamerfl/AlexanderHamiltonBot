const { SlashCommandBuilder } = require('discord.js');

const quotes = [
	'Those who stand for nothing fall for everything.',
	'Men give me credit for some genius. All the genius I have lies in this; when I have a subject in hand, I study it profoundly. Day and night it is before me. My mind becomes pervaded with it. Then the effort that I have made is what people are pleased to call the fruit of genius. It is the fruit of labor and thought.',
	'Give all the power to the many, they will oppress the few. Give all the power to the few, they will oppress the many.',
	'A well adjusted person is one who makes the same mistake twice without getting nervous.',
	'I never expect a perfect work from an imperfect man.',
	'Why has government been instituted at all? Because the passions of man will not conform to the dictates of reason and justice without constraint.',
	'The sacred rights of mankind are not to be rummaged for among old parchments or musty records. They are written, as with a sunbeam, in the whole volume of human nature, by the Hand of Divinity itself, and can never be erased or obscured by mortal power.',
	'There are approximately 1,010,300 words in the English language, but I could never string enough words together to properly express how much I want to hit you with a chair. (Alexander Hamilton, to Thomas Jefferson)',
	'I have thought it my duty to exhibit things as they are, not as they ought to be.',
	'Hard words are very rarely useful. Real firmness is good for every thing. Strut is good for nothing.',
	'Men are reasoning rather than reasonable animals.',
	'A powerful, victorious ally is yet another name for master.',
	'The best we can hope for concerning the people at large is that they be properly armed.',
	'For in politics, as in religion, it is equally absurd to aim at making proselytes by fire and sword. Heresies in either can rarely be cured by persecution.',
	'If we must have an enemy at the head of government, let it be one whom we can oppose, and for whom we are not responsible.',
	'If men were angels, no government would be necessary.',
	'To all general purposes we have uniformly been one people each individual citizen everywhere enjoying the same national rights, privileges, and protection.',
	'If the sword of oppression be permitted to lop off one limb without opposition, reiterated strokes will soon dismember the whole body.',
	'A strong body makes the mind strong... I advise the gun. While this gives moderate exercise to the body, it gives boldness, enterprise, and independence to the mind.',
	'The voice of the people has been said to be the voice of God; and, however generally this maxim has been quoted and believed, it is not true to fact. The people are turbulent and changing, they seldom judge or determine right.',
	'Caution and investigation are a necessary armor against error and imposition.',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quotes')
		.setDescription('Replies with quotes from Alexander Hamilton'),
	async execute(interaction) {
		await interaction.reply(quotes[Math.floor(Math.random() * quotes.length)]);
	},
};