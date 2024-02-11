const noButton = document.getElementById("noButton")
const yesButton = document.getElementById("yesButton")
const megaYesButton = document.getElementById("megaYesButton")
let bbyPic = document.getElementById("bbyPic")

let prev = 0

noButton.style.order = 0
yesButton.style.order = 1
megaYesButton.style.order = 2

noButton.addEventListener("mouseover", (e) => {
    prev = noButton.style.order
    noButton.style.order = parseInt(megaYesButton.style.order)
    megaYesButton.style.order = parseInt(prev)

})

yesButton.addEventListener("mouseover", (e) => {
    prev = yesButton.style.order
    yesButton.style.order = parseInt(megaYesButton.style.order)
    megaYesButton.style.order = parseInt(prev)

})

function bbySpin(){
    let newBbyPic = bbyPic.cloneNode(true)
    bbyPic.parentNode.insertBefore(newBbyPic, bbyPic)
    bbyPic.remove()
    bbyPic = newBbyPic
    bbyPic.style.display = "block"
    bbyPic.style.animation = "spin 4s ease-out"
    const yip = document.createElement("div")
    yip.innerText = "Yippee!"
    document.getElementById("body").appendChild(yip)
}