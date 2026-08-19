const express = require("express");
const app = express();

app.use(express.json({ type: "*/*" }));
app.use(express.urlencoded({ extended: true }));

app.all("/api/webhooks/:id/:token", (req, res) => {
    console.log("========== REQUEST ==========");
    console.log("METHOD:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);
    console.log("=============================");

    // Imitate a successful Discord webhook execution
    res.status(200).json({
        id: "123456789012345678",
        type: 0,
        content: req.body?.content || "",
        channel_id: "583104927615",
        author: {
            id: "583104927615",
            username: req.body?.username || "Webhook",
            avatar: null
        },
        attachments: [],
        embeds: req.body?.embeds || [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: req.body?.tts || false
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
