const { SlashCommandBuilder } = require('discord.js');
const getRandomPhysicsQuestion  = require('../../questions/physics_quesions');

/*
The data property, which will provide the command definition shown above for registering to Discord.
The execute method, which will contain the functionality to run from our event handler when the command is used.

These are placed inside module.exports so they can be read by other files; namely the command loader and command deployment scripts mentioned earlier.
*/

module.exports = {
    data: new SlashCommandBuilder()
        .setName('physics')
        .setDescription('give a physics problem to solve'),
    async execute(interaction) {
        await interaction.reply(getRandomPhysicsQuestion());
    }
};