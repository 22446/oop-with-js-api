let row = document.getElementById("gameData")

export class ui{
    displayData(getData) {
    const detailsBox = `
    
    <div class="col-md-4">
    <figure>
       <img src="${getData.thumbnail}" class="w-100" alt="details image" />
    </figure>
 </div>
 <div class="col-md-8">
 
    <div>
       <nav aria-label="breadcrumb">
          <ol class="breadcrumb" class="text-light">
             <li class="breadcrumb-item text-reset"><a href="./home.html">Home</a></li>
             <li class="breadcrumb-item text-info" aria-current="page">${getData.title}</li>
          </ol>
       </nav>
 
       <h1>${getData.title}</h1>
 
       <h3>About ${getData.title}</h3>
       <p>${getData.description}</p>
 
       
    </div>
 </div>
 
    `;
 
    document.getElementById("detailsData").innerHTML = detailsBox;
}
} 
import {GetData,showDetails} from './home.js'




export class uidetails{
   
   
   display(GetDatta){
      
      let cartona=""
      for(let i=0;i<GetDatta.length;i++)
         
         
        {
        cartona+= ` <div class="col">
        
          <div  onclick="showDetails(${GetDatta[i].id})"  class="card h-100 bg-transparent" role="button" >
          <div class="card-body">
    
             <figure class="position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${GetDatta[i].thumbnail}"/>
             </figure>
    
             <figcaption>
    
                <div class="hstack justify-content-between">
                   <h3 class="h6 small"> ${GetDatta[i].title} </h3>
                   <span class="badge text-bg-primary p-2">Free</span>
                </div>
    
                <p class="card-text small text-center opacity-50">
                   ${GetDatta[i].short_description}
                </p>
    
             </figcaption>
          </div>
    
          <footer class="card-footer small hstack justify-content-between">
    
             <span class="badge badge-color">${GetDatta[i].genre}</span>
             <span class="badge badge-color">${GetDatta[i].platform}</span>
    
          </footer>
       </div>
    </div>
       `
        }
        row.innerHTML=cartona
    }
    
   }

   