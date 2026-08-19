const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/webhooks/:id/:token", (req, res) => {
    console.log("ROBLOX WEBHOOK RECEIVED");
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Body:", req.body);

    res.status(204).end();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
