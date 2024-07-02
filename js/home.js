import {uidetails} from './ui.module.js'
let row = document.getElementById("gameData")
const links=document.querySelectorAll(".menu a");
let loader = document.querySelector('.loading')
let logout=document.querySelector(".logout-btn")
let allHtml=document.querySelector("html")
let LightMoon=document.getElementById("mode")


export class GetData{
    async  GetDatta(getName){
        loader.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            }
        };
        let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${getName}`, options);
        let response=await apiResponse.json()
        let i = new uidetails()
        console.log(response);
        i.display(response)
        loader.classList.add("d-none")
    
    }
    }

let x = new GetData()
x.GetDatta("mmorpg");

for(let i =0;i<links.length;i++){
        links[i].addEventListener("click",function(){
        document.querySelector('.active').classList.remove("active")
        links[i].classList.add("active")
        let getName=links[i].getAttribute("data-category")
        
        x.GetDatta(getName)
       
    })
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

export function showDetails(id){
    location.href=`./Details.html?id=${id}`
}
   





