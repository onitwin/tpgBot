const { SlashCommandBuilder,EmbedBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, Events ,AttachmentBuilder} = require('discord.js');

const button = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setLabel('Google Maps!')
        .setStyle(ButtonStyle.Link)
        .setURL("https://maps.app.goo.gl/ExBi7Xx43MesjE6M9")
);

const file= new AttachmentBuilder("assets/tpgLogo.png");

module.exports = {

	data: new SlashCommandBuilder()
		.setName('directions')
		.setDescription('Directions for Third Pillar Gaming'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
        .setTitle("How to find us!")
        .setDescription("Find is on Google Maps at the link below ")
        .setColor("White")
        .setImage('attachment://tpgLogo.png')
        .addFields({
            name:"what3words location",
            value:"goats.angel.jets",
            inline:false
        },
        {
            name:"Address",
            value:"38 Gower Street, Bellahouston, Glasgow, G51 1PH",
            inline:false}
        )

        interaction.reply({embeds:[embed],components:[button],files:[file],ephemeral:true})
    }
};