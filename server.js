require("dotenv").config({ path: "./config.env" });
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());

app.use(errorHandler);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());

app.use(errorHandler);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
