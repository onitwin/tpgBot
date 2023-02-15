const { SlashCommandBuilder,EmbedBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, Events ,AttachmentBuilder} = require('discord.js');

const file= new AttachmentBuilder("assets/tpgLogo.png");

module.exports = {

	data: new SlashCommandBuilder()
		.setName('pay')
		.setDescription('How to pay for your table'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
        .setTitle("Costs")
        .setDescription("Prices are £8 per one-off game or membership for £28 a month")
        .setColor("White")
        .setImage('attachment://tpgLogo.png')
        .addFields({
            name:"Recipient",
            value:"Aaron Skinner",
            inline:false

        },
            {
            name:"Sort Code",
            value:"040004",
            inline:true
        },
        {
            name:"Account No#",
            value:"97300730",
            inline:true}
        )

        interaction.reply({embeds:[embed],files:[file],ephemeral:true})
    }
};