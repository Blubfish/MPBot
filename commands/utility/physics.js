const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const getRandomPhysicsQuestion = require("../../questions/physics_quesions");
const activeQuestions = require("../../activeQuestions");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("physics")
    .setDescription("give a physics problem to solve")
    .addStringOption((option) =>
      option
        .setName("unit")
        .setDescription("Select the physics unit for the question")
        .setRequired(true)
        .addChoices(
          { name: "Random", value: "random" },
          { name: "Unit 1: Kinematics and Forces Part 1", value: "unit1" },
          { name: "Unit 2: More Dynamics and SHM", value: "unit2" },
          { name: "Unit 3: Work, Energy, and Momentum", value: "unit3" },
          { name: "Unit 4: Rotation and Torque", value: "unit4" },
          { name: "Unit 5: Gravitation", value: "unit5" },
          { name: "Unit 6: Oscillations", value: "unit6" },
          { name: "Unit 7: Electrostatics", value: "unit7" },
          { name: "Unit 8: Gauss’s Law", value: "unit8" },
          {
            name: "Unit 9: Electric Potential and Electric Potential Energy",
            value: "unit9",
          },
        ),
    ),
  async execute(interaction) {
    const getPhysicsAnswer = new ButtonBuilder()
      .setCustomId("getPhysicsAnswer")
      .setLabel("Get Answer")
      .setEmoji("💡")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(getPhysicsAnswer);
    const questionData = getRandomPhysicsQuestion(
      interaction.options.getString("unit"),
    );

    await interaction.reply({
      content: questionData.question,
      components: [row],
    });

    const reply = await interaction.fetchReply();

    activeQuestions.set(reply.id, questionData);
  },
};
