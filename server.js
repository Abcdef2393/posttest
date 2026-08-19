const express = require("express");
const app = express();

app.use(express.json());

const webhook = {
    application_id: null,
    avatar: null,
    channel_id: "1530720092055404776",
    guild_id: "1530720083909808158",
    id: "1539035219439517717",
    name: "Captain Hook",
    type: 1,
    token: "iu0hIuF4r9LPYCXdAWyOUBYaruTtiFQYBA-I-0wwDWnZPCtGRKAT0_ZH-WlB-IDVbBdu",
    url: "https://posttest-1ehw.onrender.com/api/webhook/1539035219439517717/iu0hIuF4r9LPYCXdAWyOUBYaruTtiFQYBA-I-0wwDWnZPCtGRKAT0_ZH-WlB-IDVbBdu"
};

// GET = give information about the webhook
app.get(
    "/api/webhook/1539035219439517717/iu0hIuF4r9LPYCXdAWyOUBYaruTtiFQYBA-I-0wwDWnZPCtGRKAT0_ZH-WlB-IDVbBdu",
    (req, res) => {
        res.json(webhook);
    }
);

// POST = receive webhook content
app.post(
    "/api/webhook/1539035219439517717/iu0hIuF4r9LPYCXdAWyOUBYaruTtiFQYBA-I-0wwDWnZPCtGRKAT0_ZH-WlB-IDVbBdu",
    (req, res) => {
        console.log("Webhook received!");
        console.log(req.body);

        res.status(204).send();
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
