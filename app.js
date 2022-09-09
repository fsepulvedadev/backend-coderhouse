const express = require("express");
const bodyParser = require("body-parser");
const { Router } = express;
const Api = require("./api.js");

const productos = new Api([
  {
    id: 1,
    name: "Monitor 1 ",
    price: 12000,
    thumbnail: "https://www.google.com.ar",
  },
  {
    id: 2,
    name: "Monitor 2",
    price: 14000,
    thumbnail: "https://www.google.com.ar",
  },
  {
    id: 3,
    name: "Monitor 3",
    price: 18000,
    thumbnail: "https://www.google.com.ar",
  },
]);

const app = express();
const router = Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

router.get("/", (req, res) => {
  res.send(productos.getAllProducts());
});
router.get("/:id", (req, res) => {
  res.send(productos.getProduct(req.params.id));
});

app.use("/api/productos", router);
