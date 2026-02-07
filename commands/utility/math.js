const { SlashCommandBuilder } = require('discord.js');
const  getRandomMathQuestion  = require('../../questions/math_questions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('math')
        .setDescription('give a math problem to solve'),
    async execute(interaction) {
        await interaction.reply(getRandomMathQuestion());
    }
};