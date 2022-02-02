const API = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=56bbb130ef7784152fef4fde03f5de04&hash=89b4d69d7f0a599c570e0a2a9c125901";
const container = document.querySelector('#marvel-row'); //llamando por el ID

const getAPI = (url) => {
  console.log("Ingresó");
  return fetch(url) //función fetch permite consumir apis
    .then((response) => response.json())
    .then((json) => {
        console.log(json, 'RES.JSON');
        const container = document.querySelector('#marvel-row'); //llamando por el ID
    })
    .catch((error) => {
      console.log("Error in te API : ", error);
    });
};

getAPI(API); //Al ejecutarse se solicita obtener
//Cuando se ejecuta se envía la variable con la URL y la funcion la recibe, Aqí recibe la url