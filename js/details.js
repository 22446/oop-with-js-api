let allHtml=document.querySelector("html")
let LightMoon=document.getElementById("mode")
let loader = document.querySelector(".loading")
let search=location.search;
let getParams=new URLSearchParams(search)
let id=getParams.get("id");

import {ui} from "./ui.module.js"

let u = new ui();


   async function get()
   {
    loader.classList.remove("d-none")
    const options = {
        method: "GET",
        headers: {
           "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
           "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
     };
     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
     let getData=await api.json();
     u.displayData(getData)
     loader.classList.add("d-none")

   }




LightMoon.addEventListener("click",function(){
   this.classList.toggle("fa-moon") 
    if(allHtml.getAttribute("data-theme")=="dark"){

      allHtml.setAttribute("data-theme","light") 
   }
   else {
      allHtml.setAttribute("data-theme","dark")
   }
})

