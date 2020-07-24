//1
/**
 * Funcion que retorna el numero de casos de personas
 * infectadas en el total en el mundo
 */
const getTotalDeCasosEnElMundo = () => {
  let total = 0;
  for (let i = 0; i < covid.length; i++) {
    total = total + covid[i].cases;
  }
  return total;
};
let todo = getTotalDeCasosEnElMundo();
console.log(todo);
//2
/**
 * Funcion que rertorna un objeto completo de cifras
 * de un pais dado su nombre, en caso no encuentre el pais
 * retornar NULL
 * @param {*} pais
 */
// const getCifrasByNamePais = (pais) => {
//   for (let i = 0; i < covid.length; i++) {
//     if (covid[i].country === pais) {
//       return covid[i];
//     }
//   }
// return null;
// };
// console.log(getCifrasByNamePais(+prompt("Ingrese Pais: ")));
// //3
// /**
//  *
//  * @param {*} pais
//  */
// // const getPorcentajeDeRecuperadosByNamePais = (pais)=>{
// // for (let i = 0; i < covid.length; i++) {
// //    if (pais === ) {

// //    }
// //     const element = array[i];

// // }

// }

const generarArrayPorcentajeDePruebasPositivas = () => {
  let arregloResultado = [];
  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objTemporal = {
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajePrueba: porcentaje,
    };
    arregloResultado.push(objTemporal);
  }
  return arregloResultado
};
let resultado = generarArrayPorcentajeDePruebasPositivas();
console.log(resultado);