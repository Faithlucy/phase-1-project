const baseURL="http://localhost:3000/patients"
const inputSearch=document.getElementById("search")
const searchButton=document.getElementById("searchbutton")
const displaydetails=document.getElementById("display")

inputSearch.addEventListener("keydown",
function(e){
    if (e.code=="Enter"){
        fetchPatient()
    }})

searchButton.addEventListener('click',fetchPatient)

function fetchPatient(){
    fetch(`${baseURL}`)
    .then((response)=> response.json())
    .then((data)=>{
        let patientName=""
        data.forEach(element => {
            if(element.name===inputSearch.value){
                patientName=element.first_name
            }else{
                return "Patient not found"
            }
            const newp =displaydetails.createElement("p")
            p.innerHTML=` ${patientName}`
            document.append(newp)
            


    })
    
})

}

    const submit= document.getElementById("submit")
    const patientname = document.getElementById("fname").value;
    submit.addEventListener("submit",()=>{


        fetch(baseURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {  name : `${first_name}`,
                medicalHistory : `${medical_history}`,
            }
            )     
          })
          .then(response => response.json())
          .then(data => {
            comsole.log(data)
          })
        })
        

    


    