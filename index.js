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

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    else if(command === 'journal' || command === 'j') {
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
    else if(command === 'hunt') {
        message.reply({
            content: `**Flickering**\n• Fast (~.5s): Oni\n• Normal (~1s): Any\n• Slow (~1.5s): Phantom`
        })
    }
    else if(command === 'monkey-paw' || command === 'monkey' || command === 'paw' || command === 'mp') {
        message.reply({
            content: `**Monkey Paw Wishes**\n\n` +
                     `"I wish to see the ghost"\n• Pro: Ghost appears in front of you\n• Con: After event, hunt will start\n\n` +
                     `"I wish for activity":\n• Pro: Double all ghost activity for 2 minutes\n• Con: Breaker breaks and front door locked for 2 minutes\n\n` +
                     `"I wish for sanity":\n• Pro: Averages sanity to 50%\n• Con: Changes ghost's favorite room and increases sanity drain by 50%\n\n` +
                     `"I wish the ghost was trapped":\n• Pro: Ghost locked in room for 1 minute\n• Con: Locks doors in the players room and hunt starts after the 1 minute period\n\n` +
                     `"I wish for life":• Pro: Revive a dead player\n• Con: 50% chance the wishing player dies\n\n` +
                     `"I wish to be safe":\n• Pro: Unblocks nearest hiding spot\n• Con: break the light in that room and ghost is able to sense/hear player from any distance\n\n` +
                     `"I wish to leave":\n• Pro: Unlocks all exit doors\nCon: Player slowned and vision darkened for 5s\n\n` +
                     `"I wish for knowledge":\n• Pro: Removes 1 incorrect evidence from journal\n• Con: Starts a hunt and player vision and audio is reduced for rest of round\n\n` +
                     `"I wish for [weather]":\n• Pro: Changes weather to specified one\n• Con: Drops sanity by 25%\n\n` +
                     `"I wish for anything":\n• Randomly chooses one of the above\n`
        })
    }
    else if(command === 'ouija-board' || command === 'oujia' || command === 'o' || command === 'board') {
        message.reply({
            content: `**Oujia Board Questions**\n\n` +
                     `"Where are you?"\n• Sanity: -50%\n` +
                     `• Gives current room of ghost (NOT favorite room)\n\n` +
                     `"Are you here/close?"\n• Sanity: -20%\n• Tells if ghost is in same room as player\n\n` +
                     `"Where is the bone?"\n• Sanity: -50%\n• Gives the room of the bone\n\n` +
                     `"Hide and Seek?"\n• Sanity: -0%\n• Counts down from 5 and begins hunt\n\n` +
                     `"Do you respond to everyone?"\n• Sanity: -20%\n• Replies with if the ghost wants to be alone when using spirit box\n\n` +
                     `"How old are you?"\n• Sanity: -5%\n• Gives current age of ghost, if number changes ghost is a Thaye\n\n` +
                     `"When did you die?"\n• Sanity: -5%\n• Returns random number\n\n` +
                     `"What is my sanity?"\n• Sanity: -5%\n• 'Healthy' (>80%), 'Good' (60-80%), 'Average' (40-60%), 'Bad' (20-40%), 'Awful' (<20%)\n\n` +
                     `"How insane am I?"\n• Sanity: -5%\n• 'Not Very' (>50%), 'Very' (25-50%), 'Insane' (<25%)\n\n` +
                     `"Am I insane?"\n• Sanity: -5%\n• 'Yes' (Sanity < 20%), 'Maybe': (Sanity 20-90%), 'No' (Sanity > 50%)\n\n` +
                     `"How did you die?"\n• Sanity: -5%\n• Returns ghost cause of death\n\n` +
                     `"How do you fee;?"\n• Sanity: -5%\n• Returns a random emotion\n\n` +
                     `"Why are you here?"\n• Sanity: -5%\n• Returns random reason\n\n` +
                     `"Knock Knock"\n• Sanity: -5%\n• Returns "Whos there"\n\n` +
                     `"Marco"\n• Sanity: -5%\n• Returns "Polo"` 
        })
    }

    client.on("interactionCreate", async (interaction) => {
        if(interaction.isButton()) {
            interaction.message.components.forEach((row) => {
                row.components.forEach((b) => {
                    if(b.data.custom_id === interaction.customId) {
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