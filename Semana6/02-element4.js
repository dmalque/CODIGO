let lista=document.getElementById("lista");
let btnGenerar =document.getElementById("btnGenerar");


btnGenerar.onclick=()=>{
    let liTemporal=document.createElement("li");
    liTemporal.innerText=(Math.random()*(45-1)+1).toFixed(0);

    lista.appendChild(liTemporal);
}