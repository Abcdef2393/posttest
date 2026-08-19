const express = require("express");
const app = express();
app.use(express.json());

// extra
// app.use(express.placeholder());

// replace the path with anything, remove the path, because it can affect the link, make sure it is like: ("", (req, res) => { to remove 
// the path

app.get("path", (req, res) => {

    // use this as the input (what is being sent)

    const input = req.query.input;
    res.send("put what your sending")
});

app.post("/api/webhook/583104927615/8fK3mQ7xV2pL9zR4", (req, res) => {
	console.log(req.body);
	res.send("Recieved!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});