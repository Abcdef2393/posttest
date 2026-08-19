const express = require("express");
const app = express();

app.use(express.raw({ type: "*/*" }));

app.use((req, res) => {
    console.log("========== REQUEST ==========");
    console.log("METHOD:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("CONTENT TYPE:", req.headers["content-type"]);
    console.log("BODY:", req.body.toString());
    console.log("=============================");

    res.status(204).end();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
