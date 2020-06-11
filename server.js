const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));

const clientRoute = require("./routes/client-route");
const serverRoute = require("./routes/server-route");
const dataRoute = require("./routes/data-route");

app.use(clientRoute);
app.use(serverRoute);
app.use(dataRoute);

app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});