const { SlashCommandBuilder,EmbedBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, Events ,AttachmentBuilder} = require('discord.js');

const button = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setLabel('Book Table Here!')
        .setStyle(ButtonStyle.Link)
        .setURL("https://docs.google.com/spreadsheets/d/1RQEle4-6dJ7pFD2uth6sS7eOiI0P-zZWxHmZWHQYSrg/edit#gid=981353128")
);

const file= new AttachmentBuilder("assets/tpgLogo.png");


module.exports = {

	data: new SlashCommandBuilder()
		.setName('book')
		.setDescription('How to book a table for a game'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
        .setTitle("Book Table")
        .setDescription("To book a table click below to visit our Google Document ")
        .setColor("Blue")
        .setImage('attachment://tpgLogo.png')
        .addFields({
            name:"Opening Times",
            value:"Third Pillar Gaming Club takes place on Mondays 1700-2200, Wednesdays 1700-2200 and Saturdays 1200-2200.",
            inline:false
        },
        {
            name:"Guidelines",
            value:"To confirm attendance, we ask that all members enter their name, army and points in the google doc",
            inline:false}
        )

        interaction.reply({embeds:[embed],components:[button],files:[file],ephemeral:true})
    }
};