const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const com = urlParams.get("com")
const GAS_URL_COM="https://script.google.com/macros/s/AKfycby64xJHlP_6lqwIfLac21bOukz5EUpGvlHqTc1mPXx_PsI0EBrA8fT6-BOUzgdkBo_vJg/exec"
document.getElementById("home").addEventListener("click",()=>{
    window.location.href=`mycom.html?id=${id}&com=${com}`
})
fetch(`${GAS_URL_COM}?com=${com}`)
    .then(response=>response.json())
    .then(data=>{
        const now=new Date()
        const month=now.getMonth()+1
        console.log(month)
        console.log(data)
        const maincontent = document.getElementById("thisMonthMain")
        console.log(data[3][month])
        const workArray=String(data[3][month]).split(",")
        for (let i=0;i<workArray.length;i++){
            let p=document.createElement("p")
            p.innerHTML = workArray[i]
            maincontent.appendChild(p)
        }
    })