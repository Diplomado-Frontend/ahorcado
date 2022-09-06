const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

// List of all the files that should be served as-is
var prote= ["transformed.js", "main.css", "favicon.ico"];

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  let path = req.params["0"].substring(1);

  if (prote.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/dist/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/dist/index.html`);
  }

  // res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port);
