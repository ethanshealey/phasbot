import { REST, Routes, Client, GatewayIntentBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import dotenv from 'dotenv'
import ghosts from './ghosts.js'

dotenv.config()

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = '!'

client.on('messageCreate', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const evidence = []
    const notEvidence = []

    console.log(message.content)

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    else if(command === 'journal') {
        const emf = new ButtonBuilder()
            .setCustomId('emf')
            .setLabel('EMF Level 5')
            .setStyle(ButtonStyle.Secondary);

        const ultra = new ButtonBuilder()
            .setCustomId('ultra')
            .setLabel('Ultraviolet')
            .setStyle(ButtonStyle.Secondary);

        const writing = new ButtonBuilder()
            .setCustomId('writing')
            .setLabel('Ghost Writing')
            .setStyle(ButtonStyle.Secondary);

        const freezing = new ButtonBuilder()
            .setCustomId('freezing')
            .setLabel('Freezing Temperatures')
            .setStyle(ButtonStyle.Secondary);

        const dots = new ButtonBuilder()
            .setCustomId('dots')
            .setLabel('D.O.T.S Projector')
            .setStyle(ButtonStyle.Secondary);

        const orb = new ButtonBuilder()
            .setCustomId('orb')
            .setLabel('Ghost Orb')
            .setStyle(ButtonStyle.Secondary);

        const box = new ButtonBuilder()
            .setCustomId('box')
            .setLabel('Spirit Box')
            .setStyle(ButtonStyle.Secondary);

        const row1 = new ActionRowBuilder()
			.addComponents(emf, ultra, writing, freezing, dots);

        const row2 = new ActionRowBuilder()
			.addComponents(orb, box);

        message.reply({
            content: `**Possible types:**\n${ ghosts().map((g) => g.name).join(', ') }\n**Evidence:**`,
            components: [row1, row2]
        })
    }

    client.on("interactionCreate", async (interaction) => {
        if(interaction.isButton()) {
            // message.edit({
            //     content: `**Possible types:**\n${ ghosts().join(', ') }\n**Evidence: 2**`,
            // })
            // interaction.deferUpdate()

            interaction.message.components.forEach((row) => {
                row.components.forEach((b) => {
                    if(b.data.custom_id === interaction.customId) {
                        console.log(evidence)
                        if(evidence.includes(interaction.customId)) {
                            // already picked
                            b.data.style = ButtonStyle.Danger
                        }
                        else {
                            if(b.data.style === ButtonStyle.Danger) b.data.style = ButtonStyle.Secondary
                            else b.data.style = ButtonStyle.Success
                        }
                    }
                })
            })

            if(evidence.includes(interaction.customId) && !notEvidence.includes(interaction.customId)) {
                evidence.splice(evidence.indexOf(interaction.customId), 1)
                notEvidence.push(interaction.customId)
            }
            else if(!evidence.includes(interaction.customId) && notEvidence.includes(interaction.customId)) {
                notEvidence.splice(notEvidence.indexOf(interaction.customId), 1)
            }
            else {
                evidence.push(interaction.customId)
            }

            const possible = ghosts(evidence, notEvidence)

            interaction.update({
                content: `**Possible types:**\n${ possible.map((p) => p.name).join(', ') }\n**Evidence:**`,
                components: interaction.message.components
            })
        }
    })

})

client.login(process.env.DISCORD_TOKEN);