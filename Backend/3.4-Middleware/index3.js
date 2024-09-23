import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  var miURL = req.url;
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", miURL);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
