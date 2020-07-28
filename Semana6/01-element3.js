let btnTitulo1 = document.querySelector("#btnTitulo1");
let btnTitulo2 = document.querySelector("#btnTitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");
btnTitulo1.onclick = () => {
  /**
   * elemento .innerText => Settea el contenido de una etiqueta
   * OJO se debe considerar solo el contenido a nivel de texto y NO HTML
   */
  h1.innerText = "Nuevo <strong>Title1</strong> ";
};

btnTitulo2.onclick = () => {
  /**
   * Elemento .innerHTML => settea el contenido de una etiqueta a nivel de
   * texto y tambien reconoce etiquetas html
   */
  h1.innerHTML = "Nuevo <strong>Title</strong> 2 ";
};

const llenarSelect = () => {
  let contenido = "";
  peliculas.forEach((objPelicula) => {
    contenido = contenido + `<option value="${objPelicula.id}">${objPelicula.title}</option>`;
  });
 selectPeliculas.innerHTML= contenido;
};

btnSelect.onclick = () => {
    llenarSelect();
};
