const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const getRandomMathQuestion = require("../../questions/math_questions");
const activeQuestions = require("../../activeQuestions");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("math")
    .setDescription("Gives a math problem to solve")
    .addStringOption((option) =>
      option
        .setName("chapter")
        .setDescription("Select the math chapter for the question")
        .setRequired(true)
        .addChoices(
          { name: "Random", value: "random" },
          { name: "Random Integral Question", value: "integrals" },
          { name: "Random Derivative Question", value: "derivatives" },
          { name: "Series Tests", value: "seriesTests" },
          {
            name: "Chapter 3: Applications of Differentiation",
            value: "chapter3",
          },
          { name: "Chapter 4: Integration", value: "chapter4" },
          { name: "Chapter 5: Transcendental Functions", value: "chapter5" },
          { name: "Chapter 6: Differential Equations", value: "chapter6" },
          { name: "Chapter 7: Applications of Integration", value: "chapter7" },
          {
            name: "Chapter 8: Integration Techniques, L'Hopital's Rule, and Improper Integrals",
            value: "chapter8",
          },
          { name: "Chapter 9: Infinite Series", value: "chapter9" },
        ),
    ),

  async execute(interaction) {
    const getMathAnswer = new ButtonBuilder()
      .setCustomId("getMathAnswer")
      .setLabel("Get Answer")
      .setEmoji("💡")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(getMathAnswer);
    const questionData = getRandomMathQuestion(
      interaction.options.getString("chapter"),
    );

    await interaction.reply({
      content: questionData.question,
      components: [row],
    });

    const reply = await interaction.fetchReply();

    activeQuestions.set(reply.id, questionData);
  },
};
