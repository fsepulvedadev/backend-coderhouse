module.exports = class Api {
  constructor(productos) {
    this.productos = productos;
  }

  getAllProducts() {
    return this.productos;
  }

  getProduct(id) {
    let target = this.productos.filter((product) => product.id === id)[0];
    if (target === undefined) {
      return { error: "No se ha encontrado ningun producto con ese id" };
    } else {
      return target;
    }
  }

  addProduct(item) {
    this.productos.push({
      id: item.id || this.productos.length,
      name: item.name,
      price: item.price,
      thumbnail: item.thumbnail,
    });

    return this.productos;
  }

  editProduct(id, item) {
    let target = this.getProduct(id);

    target.name = item.name;
    target.price = item.price;
    target.thumbnail = item.thumbnail;
    return target;
  }

  deleteProduct(id) {
    this.productos.splice(this.productos.indexOf(id), 1);

    return this.productos;
  }
};

/* api.addProduct({
  name: "Monitor",
  price: 12000,
  thumbnail: "https://www.google.com.ar",
});
api.addProduct({
  name: "Notebook",
  price: 8000,
  thumbnail: "https://www.google.com.ar",
});
api.addProduct({
  name: "Smart TV",
  price: 22000,
  thumbnail: "https://www.google.com.ar",
}); */

/* console.log(api.getAllProducts()); */

/* api.deleteProduct(2); */

/* console.log(api.getAllProducts()); */

/* api.editProduct(1, {
  name: "PRODUCTO EDITADO",
  price: 8000000000,
  thumbnail: "https://www.google.com.ar",
});

console.log(api.getAllProducts());
 */
/* 
prod.addProduct({
  name: "ALGO",
  price: 22000,
  thumbnail: "https://www.google.com.ar",
});
prod.addProduct({
  name: "ALGO 2",
  price: 22000,
  thumbnail: "https://www.google.com.ar",
});

console.table(prod.getProduct(1));
 */
