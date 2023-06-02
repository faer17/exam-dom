let daddy = document.getElementById('daddy')
let randomcolor = ["red" , "#c402f5" , "blue" , "green" , "#02f1f5" , "#c402f5" , "#344ceb" , "yellow" ,  "chartreuse"]

for(let i = 0; i < 154; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    box.addEventListener("mouseover", () => OnColor(box))
    box.addEventListener("mouseout",  () => OffColor(box))
    daddy.appendChild(box)
}

function OnColor(e) {
   let color = random()
   e.style.background = color
}

function OffColor(e) {
   e.style.background = '#1c1a1a'
}

function random() {
    return randomcolor[Math.floor(Math.random() * randomcolor.length)]
}