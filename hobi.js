const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const GAS_URL_COM="https://script.google.com/macros/s/AKfycby64xJHlP_6lqwIfLac21bOukz5EUpGvlHqTc1mPXx_PsI0EBrA8fT6-BOUzgdkBo_vJg/exec"
let monthly_goal = ""
fetch(`${GAS_URL_COM}?com=${"図書委員"}`)
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
        const maincontent = document.getElementById("thisMonthMain")
        const reason=document.createElement("h1")
        reason.textContent="目標設定理由"
        maincontent.appendChild(reason)
        const reasonGoal = document.createElement("p")
        reasonGoal.innerHTML = data[1][String(month)]
        console.log(data[1][String(month)])
        console.log(reasonGoal)
        maincontent.appendChild(reasonGoal)
        const contentOWork=document.createElement("h1")
        contentOWork.textContent="取り組み内容"
        maincontent.appendChild(contentOWork)
        const workText=document.createElement("p")
        workText.innerHTML=data[2][String(month)]
        maincontent.appendChild(workText)
        
    })