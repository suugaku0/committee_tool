const GAS_URL="https://script.google.com/macros/s/AKfycbwW-3_sPET7i3LJevmlJQ5QJ2LvLCO3NSrcWQU7gWwBXZpFAm5r_lGg_xt3jFGYr7Yd/exec"
document.getElementById("loginBtn").addEventListener("click", ()=>{
    const input = document.getElementById("idInput").value;
    const comarray = {
    "":"なし",
    "0":"なし",
    "1":"学級委員",
    "2":"生活委員",
    "3":"図書委員",
    "4":"文化委員",
    "5":"給食委員",
    "6":"保健美化委員"
    }
    function gas_func(returnData){
        console.log(returnData)
            const target = "main.html?com=" + encodeURIComponent(comarray[returnData])+"&id="+encodeURIComponent(input);
            if (input.length < 5) {
                console.log("id is too short");
            }else{
                window.location.href = target
        }
    }
    fetch(`${GAS_URL}?code=${input}`)
        .then(response=>response.text())
        .then(data =>{
            let com=data
            gas_func(com)
        })
})
