const baseURL="http://localhost:3000/patients"
const inputSearch=document.getElementById("search")
const searchButton=document.getElementById("searchbutton")
const displaydetails=document.getElementById("display")

inputSearch.addEventListener("keydown",
function(e){
    if (e.code=="Enter"){
        fetchPatient()
    }})

fetch(baseURL)
.then((response)=> response.json())
.then((data)=>{
    searchButton.addEventListener("click",
    ()=>{
        if(inputSearch.textContenT===data.first_name){
            alert(`${data.name} found`)
        }else{
            alert('Patient not Found')
        }
    }
        
    )})

    const submit= document.getElementById("submit")
    const patientname = document.getElementById("fname").value;
    submit.addEventListener("submit",()=>{


        fetch(baseURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()

            
                
                
                
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error))

    } )


    