import { fetchApi } from "./funcionalidades/fetch.js";

let estados = [];
let temperaturas = [];
let estaciones = [];
let icono = [];

const rgbaRedColor ="red"
const rgbRedColor = "red"

const rgbaBlueColor = "blue"
const rgbBlueColor = "blue"

async function renderData(){
    const datosApi = await fetchApi ("https://api.gael.cloud/general/public/clima");
   console.log(datosApi)

    estaciones = datosApi.map(x => x.Estacion)
    estados = datosApi.map(x => x.Estado)
    temperaturas = datosApi.map(x => x.Temp)
    icono = datosApi.map(x => x.Icono)
    console.log(estaciones)
    console.log(estados)
    console.log(temperaturas)
    console.log(icono)

    const backgroundColors = temperaturas.map(temperatura => temperatura > 18 ? rgbaRedColor : rgbaBlueColor)
    const borderColors = temperaturas.map(temperatura => temperatura > 18 ? rgbRedColor : rgbBlueColor)
  
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: estaciones,
      datasets: [{
        label: 'eeee',
        data: temperaturas,
        borderWidth: 1,
        backgroundColor: backgroundColors,
        borderColor: borderColors
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


renderData();

