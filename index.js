const baseURL="http://localhost:3000/patients"
const inputSearch=document.getElementById("search")
const searchButton=document.getElementById("searchbutton")
const displaydetails=document.getElementById("display")

fetch(baseURL)
.then((response)=> response.json())
.then((data)=>{
    searchButton.addEventListener("click",
    ()=>{}
        
    )})