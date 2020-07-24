/**
 * Retorna un objeto pelicula en caso encuentre la pelicula
 * que el usuario busca segun el nombre
 * En caso contrario, se retorna null
 * @param {String} nombre
 */
const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      return data.peliculas[i];
    }
  }
};

//2
/**
 * Funcion que retorna una lista de peliculas que tienen
 * menos de 200 votos (en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retornar un arreglo vacio
 */

// const getMenosVotadas = () => {
//   for (let i = 0; i < data.peliculas.length; i++) {
//     if (data.peliculas[i].vote_count < 200) {
//       console.log(data.peliculas[i]);
//     }
//   }
//   return null;
// };
// getMenosVotadas();

//3
/**
 * Funcion que retorna el numero de peliculas cuyos lenguajes originales
 * NO SEAN EN INGLES
 * hint: ver el campo original_language
 */

const getNrPelisNoIngles = () => {
  let contador = 0
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].original_language !=="en") {
      contador=contador + 1;
    }
  }
  return contador;
};
let ceroIngles=getNrPelisNoIngles();
console.log(ceroIngles);
 
