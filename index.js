require("dotenv").config();
const activeQuestions = require("./activeQuestions");
const makeCardImage = require("./questions/makeCardImage");

const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags,
} = require("discord.js");
const fs = require("node:fs");
const { get } = require("node:http");
const path = require("node:path");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isChatInputCommand()) {

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`,
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  }

  if (interaction.isButton()) {
  try {
    if (
      interaction.customId === "getPhysicsAnswer" ||
      interaction.customId === "getMathAnswer"
    ) {
      const questionData = activeQuestions.get(interaction.message.id);

      if (!questionData) {
        return await interaction.reply({
          content: "I couldn't find the saved answer for this question.",
          flags: MessageFlags.Ephemeral,
        });
      }

      const cardAnswerImagePath = await makeCardImage(questionData.answer);

      await interaction.reply({
        files: [cardAnswerImagePath],
        flags: MessageFlags.Ephemeral,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

});
