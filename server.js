const express = require("express");
const app = express();

app.use(express.json());

app.get("/path", (req, res) => {
    const input = req.query.input;
    res.send("put what your sending");
});

app.post("/api/webhook/583104927615/8fK3mQ7xV2pL9zR4", (req, res) => {
    console.log(req.body);
    res.send("Received!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
