//buscar por ciudad

import { fetchApi } from "./funcionalidades/fetch.js";

const estaciones = document.getElementById("estaciones");
const button = document.getElementById("myBoton");
button.addEventListener("buscar", async () => {
    let estaciones = estaciones.value;
    const capturar = await fetch ("https://api.gael.cloud/general/public/clima")
    

  });

  async function capturarClima() {
   
        const datosApi = await fetchApi ("https://api.gael.cloud/general/public/clima");
        
        console.log(datosApi)
}

capturarClima("estaciones")

//url = " https://api.gael.cloud/general/public/clima/SCAT"

//url = "https://api.gael.cloud/general/public/clima" 

