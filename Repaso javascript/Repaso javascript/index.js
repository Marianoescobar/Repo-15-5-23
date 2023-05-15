import data from "./data.js";
console.log(data);
const contenedor= document.getElementById("contenedor");
const usuarios= JSON.parse(data)
console.log(usuarios);

for (let i=0; i <usuarios.length;i ++) {
   const tarjeta=document.createElement("div");
   tarjeta.innerHTML= `
   <h2> ${usuarios[i].name.first} ${usuarios[i].name.last}</h2>
   <img src= ${usuarios[i].picture.large}>
   <p> ${usuarios[i].location.street.name} ${usuarios[i].location.street.number}</p>
   `;
   contenedor.appendChild(tarjeta);

}
