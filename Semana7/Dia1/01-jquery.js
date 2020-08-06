// //Capturar elementos con JQuery
// let btnCambiarParrafo =$("#btnCambiarParrafo");

//eventos en JQuery
$("#btnCambiarParrafo").click(() => {
//modificar el texto (innerText) de un elemento
    $("#parrafo1").text("Ya es hora del break");
  
});

$("#btnAgregarNumero").click(()=>{
    let random =(Math.random()*(47-0)+0).toFixed(0);
    let li =$(`<li>${random}</li>`);
    $("#numeros").append(li);
});
