const express = require("express")
const path = require("path")

const app = express();
const server = require("http").createServer(app).listen(3000, '127.0.0.1', () => console.log('servidor rodando'));
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", (req, res) => {
    res.render("index.html");
})

