const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/webhooks/:id/:token", (req, res) => {
    console.log("WEBHOOK RECEIVED");
    console.log(req.body);

    res.status(200).json({
        id: "123456789012345678",
        type: 0,
        content: req.body.content || "",
        channel_id: "583104927615",
        author: {
            id: "583104927615",
            username: req.body.username || "Captain Hook",
            avatar: null
        },
        attachments: [],
        embeds: req.body.embeds || [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: req.body.tts || false
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
