const { SlashCommandBuilder } = require('discord.js');
const getRandomPhysicsQuestion  = require('../../questions/physics_quesions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('physics')
        .setDescription('give a physics problem to solve'),
    async execute(interaction) {
        await interaction.reply(getRandomPhysicsQuestion());
    }
};