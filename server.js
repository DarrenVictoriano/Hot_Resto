// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
var reservationData = [{
    routeName: "yoda",
    name: "Yoda",
    phone: "721-123-3123",
    email: "jedi@master.com"
}, {
    routeName: "yoda",
    name: "Yoda",
    phone: "721-123-3123",
    email: "jedi@master.com"
}, {
    routeName: "yoda",
    name: "Yoda",
    phone: "721-123-3123",
    email: "jedi@master.com"
}];

var waitingList = [
    {
        routeName: "yoda",
        name: "Yoda",
        phone: "721-123-3123",
        email: "jedi@master.com"
    }
];

// Routes
// ===========================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/tables", function (req, res) {

    return res.json(reservationData);

});

app.get("/api/waitlist", function (req, res) {

    return res.json(waitingList);

});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
