const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/webhook/583104927615/8fK3mQ7xV2pL9zR4", (req, res) => {
    console.log("Webhook received!");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    const content = req.body.content;

    console.log("Content:", content);

    res.status(200).send("OK");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
