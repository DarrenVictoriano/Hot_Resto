// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'Images')));

// Data
// ===========================================================
var reservationData = [{
    name: "Yoda1",
    phone: "721-123-3123",
    email: "jedi@master.com",
    customerID: "yoda1"
}, {
    name: "Yoda2",
    phone: "721-123-3123",
    email: "jedi@master.com",
    customerID: "yoda2"
}, {
    name: "Yoda3",
    phone: "721-123-3123",
    email: "jedi@master.com",
    customerID: "yoda3"
}];

var waitingList = [
    {
        name: "YodaWait",
        phone: "721-123-3123",
        email: "jedi@master.com",
        customerID: "yodawait"
    }
];

// Routes
// ===========================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

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

app.post("/api/tables", function (req, res) {
    var newReserve = req.body;

    if (reservationData.length > 4) {
        waitingList.push(newReserve);
        return res.send(false);
    } else {
        reservationData.push(newReserve);
        return res.send(true);
    }

});

app.get("/api/clear", function (req, res) {

    reservationData = [];
    waitingList = [];

    res.sendFile(path.join(__dirname, "table.html"));

});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
