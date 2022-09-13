const express = require("express");
const app = express();
const Api = require("./api.js");

const productos = new Api([
  {
    id: 1,
    name: "Lavarropas samsung ",
    price: 12000,
    thumbnail: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000008000/8216.jpg",
  },
  {
    id: 2,
    name: "Monitor Daewoo",
    price: 14000,
    thumbnail: "https://medias.musimundo.com/medias/00349000-142673-142673-01-142673-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzODIxMnxpbWFnZS9qcGVnfGgzNy9oNmQvMTAzODAzNTMyMDgzNTAvMDAzNDkwMDAtMTQyNjczLTE0MjY3M18wMS0xNDI2NzNfMDEuanBnX3NpemU1MTV8OWRlMjYwNTJiZjNkN2YyYjM4Njg5YTgyZDhlMmRmNzc5YWQ4ZjIxZGNkYjhjYTZjMmFmNjNiNWNjNzIwM2VlNg",
  },
  {
    id: 3,
    name: "Heladera Samsung",
    price: 18000,
    thumbnail: "https://medias.musimundo.com/medias/00230125-177725-177725-01.png-177725-01.png-size515?context=bWFzdGVyfGltYWdlc3wyMzc1NjJ8aW1hZ2UvcG5nfGg0MS9oYWMvMTAzNzkwNjc5ODE4NTQvMDAyMzAxMjUtMTc3NzI1LTE3NzcyNV8wMS5wbmctMTc3NzI1XzAxLnBuZ19zaXplNTE1fGI2YzllYmU5YmQ3YTg5NzY4YTM3YTk2YjY0NzFiYzBkYmIwNDk2NDMyODU2ZjgyMGUyOTgwM2NhNTkwNjBlNGY",
  },
  {
    id: 3,
    name: "Heladera Samsung",
    price: 18000,
    thumbnail: "15?context=bWFzdGVyfGltYWdlc3wyMzc1NjJ8aW1hZ2UvcG5nfGg0MS9oYWMvMTAzNzkwNjc5ODE4NTQvMDAyMzAxMjUtMTc3NzI1LTE3NzcyNV8wMS5wbmctMTc3NzI1XzAxLnBuZ19zaXplNTE1fGI2YzllYmU5YmQ3YTg5NzY4YTM3YTk2YjY0NzFiYzBkYmIwNDk2NDMyODU2ZjgyMGUyOTgwM2NhNTkwNjBlNGY",
  },
]);


app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.render("pages/Formulario.ejs")
});


app.get("/productos", (req, res) => {
    
   

    res.render("pages/Productos.ejs", {
        productos: productos.getAllProducts()
      });
   
  
});

app.post("/productos", (req, res) => {

    console.log(req.body)
    productos.addProduct(req.body)

    res.redirect("/");
  
});

app.listen(8080, () => {
  console.log("Server en puerto 8080");
});
