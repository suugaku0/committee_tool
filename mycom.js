const modal=document.getElementById("ask-modal")
const askBtn=document.getElementById("ask")
askBtn.addEventListener("click",()=>{
    modal.showModal();
    console.log("clicked")
})
const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const com = urlParams.get("com")
const GAS_URL_COM="https://script.google.com/macros/s/AKfycby64xJHlP_6lqwIfLac21bOukz5EUpGvlHqTc1mPXx_PsI0EBrA8fT6-BOUzgdkBo_vJg/exec"
let monthly_goal = ""
document.getElementById("todo").addEventListener("click",()=>{
    window.location.href=`iinwork.html?id=${id}&com=${com}`
})

fetch(`${GAS_URL_COM}?com=${com}`)
    .then(response=>response.json())
    .then(data=>{
        const now=new Date()
        const month=now.getMonth()+1
        console.log(month)
        console.log(data)
        monthly_goal+=data[0][String(month)]
        console.log(monthly_goal)
        document.getElementById("first").innerText=monthly_goal.split(",")[0]
        document.getElementById("second").innerText=monthly_goal.split(",")[1]
        const reasonGoal = document.createElement("p")
        reasonGoal.innerHTML = data[1][String(month)]
        console.log(data[1][String(month)])
        console.log(reasonGoal)
        const maincontent = document.getElementById("thisMonthMain")
        maincontent.appendChild(reasonGoal)
        const contentOWork=document.createElement("h1")
        contentOWork.textContent="取り組み内容"
        maincontent.appendChild(contentOWork)
        const workText=document.createElement("p")
        workText.innerHTML=data[2][String(month)]
        maincontent.appendChild(workText)
        
    })