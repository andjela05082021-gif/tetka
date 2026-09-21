import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} from 'discord.js';

const YOUTUBE_LINK = 'https://www.youtube.com/@akatetka';
const TIKTOK_LINK = 'https://www.tiktok.com/@akatetka';

export default {
    data: new SlashCommandBuilder()
        .setName('tetka')
        .setDescription('Prikaži Tetkine društvene mreže (YouTube i TikTok)')
        .setDMPermission(false),
    category: 'general',

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('TETKA DRUŠTVENE MREŽE 📱')
            .setDescription(
                [
                    'Prati me na društvenim mrežama i ne propusti nove klipove! 🎬',
                    '',
                    `▶️ **YouTube:** [akatetka](${YOUTUBE_LINK})`,
                    `🎵 **TikTok:** [akatetka](${TIKTOK_LINK})`,
                ].join('\n'),
            )
            .setThumbnail(interaction.client.user.displayAvatarURL({ size: 256 }))
            .setColor(0x2b2d31);

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('YouTube')
                .setEmoji('▶️')
                .setStyle(ButtonStyle.Link)
                .setURL(YOUTUBE_LINK),
            new ButtonBuilder()
                .setLabel('TikTok')
                .setEmoji('🎵')
                .setStyle(ButtonStyle.Link)
                .setURL(TIKTOK_LINK),
        );

        await interaction.reply({ embeds: [embed], components: [row] });
    },
};
