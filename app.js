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
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

router.get("/", (req, res) => {
  res.send(productos.getAllProducts());
});
router.delete("/:id", (req, res) => {
  let deletedItem = productos.deleteProduct(req.params.id);

  if (!deletedItem) {
    res.send({ error: "Producto no encontrado." });
  } else {
    res.send(`El producto con id ${deletedItem.id} ha sido borrado.`);
  }
});
router.put("/:id", (req, res) => {
  if (req.body.error) {
    console.error(req.body.error);
    res.send("Ha ocurrido un error");
  } else {
    let editedProduct = productos.editProduct(req.params.id, req.body);
    console.table(editedProduct);

    res.send("Producto editado:" + JSON.stringify(editedProduct));
  }
});
router.post("/", (req, res) => {
  let newItem = productos.addProduct(req.body);
  console.log(newItem);

  res.send("Producto agregado con id " + newItem.id);
});
router.get("/:id", (req, res) => {
  let item = productos.getProduct(req.params.id);
  if (!item) {
    res.send({ error: "Producto no encontrado." });
  } else {
    res.send(JSON.stringify(item));
  }
});

app.use("/api/productos", router);
