const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/webhooks/:id/:token", (req, res) => {
    console.log("=== WEBHOOK RECEIVED ===");
    console.log("ID:", req.params.id);
    console.log("Token:", req.params.token);
    console.log("Body:", req.body);

    res.status(204).send();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
