let semaforo=true;
let notas = [];
let suma=0;
do{
    let nota = +prompt("Ingrese nueva nota");
    if (nota === -1) {
        semaforo=false;
    }else{
        notas.push(nota);
        suma +=nota;
    }
} while (semaforo === true);
console.log(`Promedio de notas ${suma/notas.length}`);    
