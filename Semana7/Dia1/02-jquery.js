let productos = [];
const dibujarCards = () => {
    $("#productos").html("");
  productos.forEach((objProduct) => {
    let cardProducto = $(`<div class="productos__producto">
<h4>${objProduct.nombre}</h4>
<p><span>Codigo:</span>${objProduct.codigo}</p>
</div>`);
    $("#productos").append(cardProducto);
  });
};

$("#formulario").submit(function (e) {
  e.preventDefault();
  let objProducto = {
    nombre: $("#inputNombre").val().trim(),
    codigo: $("#inputCodigo").val().trim(),
  };
  productos.push(objProducto);
  dibujarCards();
});
