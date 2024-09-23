import express from "express";
const app = express();
const port = 3000;
const enrutamiento = "/"

app.get (enrutamiento, (req, res) => {
  res.send("¡Hola!");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
