const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/webhooks/:id/:token", (req, res) => {
    console.log("================================");
    console.log("WEBHOOK POST RECEIVED");
    console.log("ID:", req.params.id);
    console.log("TOKEN:", req.params.token);
    console.log("BODY:", req.body);
    console.log("================================");

    res.status(204).send();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
