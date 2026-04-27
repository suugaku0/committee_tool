const query = window.location.search

const urlParams = new URLSearchParams(query)

const id = urlParams.get("id")
const com = urlParams.get("com")
console.log(id)
console.log(com)

if (com=="なし"){
    document.getElementById("my_com").classList.add("hide")
}

document.getElementById("my_com").addEventListener("click",()=>{
        window.location.href=`mycom.html?id=${id}&com=${com}`
    })
document.getElementById("gakkyu").addEventListener("click",()=>{
    window.location.href=`gakkyu.html?id=${id}&com=${com}`
})
document.getElementById("seikatu").addEventListener("click",()=>{
    window.location.href=`seikatu.html?id=${id}&com=${com}`
})
document.getElementById("tosho").addEventListener("click",()=>{
    window.location.href=`tosho.html?id=${id}&com=${com}`
})
document.getElementById("bunka").addEventListener("click",()=>{
    window.location.href=`bunka.html?id=${id}&com=${com}`
})
document.getElementById("kyuushoku").addEventListener("click",()=>{
    window.location.href=`kyuushoku.html?id=${id}&com=${com}`
})
document.getElementById("hobi").addEventListener("click",()=>{
    window.location.href=`hobi.html?id=${id}&com=${com}`
})
const modal=document.getElementById("ask-modal")
document.getElementById("ask").addEventListener("click",()=>{
    modal.showModal()
})