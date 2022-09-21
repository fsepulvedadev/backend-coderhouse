window.addEventListener("load", () => {
  let boton = document.getElementById("enviar");
  boton.addEventListener("click", publicarData);
});
console.log("cargo esto");

function publicarData(e) {
  try {
    e.preventDefault();
    let formNombre = document.getElementById("name");
    let formPrecio = document.getElementById("precio");
    let formUrl = document.getElementById("url");
    let xhr = new XMLHttpRequest();
    let newProducto = {
      name: formNombre.value,
      price: formPrecio.value,
      thumbnail: formUrl.value,
    };
    /*   xhr.open("POST", "http://localhost:8080/productos");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(newProducto)); */
    console.log(newProducto);
  } catch (error) {
    console.log("Hubo un error", error);
  }
}
