const baseURL= "http://localhost:3000/patients"

//diplay patient details
const searchdata= document.getElementById("searchbutton")
searchdata.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch(baseURL)
    .then((response)=> response.json())
    .then((data)=>{
        const displaydata= document.getElementById("display")
        data.forEach(element => {
            const newp = document.createElement('p');
            newp.textContent=`Name : ${element.first_name} medical history :${element.medical_history}`;
            displaydata.appendChild(newp)
            });     
        


        
    })
})


