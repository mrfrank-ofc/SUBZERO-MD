const { cmd } = require('../command');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Simulated fetchJson function for API requests
const fetchJson = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`fetchJson Error: ${error.message}`);
        if (error.response) {
            console.error(`Response Status: ${error.response.status}`);
            console.error(`Response Data: ${JSON.stringify(error.response.data, null, 2)}`);
        }
        return null;
    }
};

cmd({
    pattern: "xdownload",
    react: "📥",
    desc: "Download videos from Xvideos.",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { q, reply }) => {
    try {
        if (!q) return reply("❌ Please provide a valid Xvideos URL.");

        const apiUrl = `https://api.giftedtech.web.id/api/download/xvideosdl?apikey=gifted&url=${encodeURIComponent(q)}`;
        console.log("Requesting API with URL:", apiUrl);

        // Fetch video data
        const response = await fetchJson(apiUrl);
        if (!response || !response.result) {
            console.error("❌ Failed to fetch video. Please check the URL or try again later.");
            return reply("❌ Failed to fetch video. Please check the URL or try again later.");
        }

        const videoData = response.result;
        const videoUrl = videoData.download_url;
        const videoTitle = videoData.title.replace(/[<>:"/\\|?*]/g, ''); // Clean the title for file naming
        const videoPath = path.join(__dirname, `${videoTitle}.mp4`);

        // Download the video
        console.log("Subzero Downloading video...");
        const videoResponse = await axios({
            url: videoUrl,
            method: 'GET',
            responseType: 'stream',
        });

        // Save the video file locally
        const writer = fs.createWriteStream(videoPath);
        videoResponse.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        console.log(`Subzero downloaded video successfully: ${videoPath}`);

        // Send the video to the user
        await conn.sendMessage(m.chat, { video: fs.readFileSync(videoPath), caption: `🎥 *Title:* ${videoData.title}\n👀 *Views:* ${videoData.views}\n👍 *Likes:* ${videoData.likes}` });

        // Clean up the downloaded file
        fs.unlinkSync(videoPath);

        console.log("Video sent and file cleaned up.");
    } catch (error) {
        console.error("Unexpected Error:", error.message);
        return reply("❌ An error occurred while processing your request. Please try again.");
    }
});
