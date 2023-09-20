let inputSreach=document.getElementById("search-input");
let searchBtn=document.getElementById("search-btn");
 let result=document.getElementById("result");
searchBtn.addEventListener("click",()=>{
    let countryname=inputSreach.value;
    let url=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    fetch(url)
    .then((response)=>{
       return response.json();
    }).then((data)=>{
    console.log(data[0])
     inputSreach.value='';
     result.innerHTML =`
     <img src="${data[0].flags.png}" class="flag-img">
     <p class="country-name">${data[0].name.common}</p>
     <div class="country-info">
     <p class="capital">Capital :&nbsp<span>${data[0].capital[0]}</span></p>
     <p class="continents">Continents :&nbsp<span>${data[0].continents[0]}</span></p>
     <P class="language">Languages :&nbsp<span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></p>
    
     <p class="curreny">Currency :&nbsp<span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span></p>
     <p class="population">Population :&nbsp<span>${data[0].population}</span></p>
     <p class="area">Area :&nbsp<span>${data[0].area}</span></p>
     </div>
     `;
}).catch(()=>{
if(countryname.length == 0){
    result.innerHTML=`<h3>The input field cannot be empty</h3>`;
}
else{
    result.innerHTML=`<h3>please enter valid country name.</h3>`
}
})
})
