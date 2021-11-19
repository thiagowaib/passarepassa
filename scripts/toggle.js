let colorState = 1;
const colorTag = document.getElementById("span-time")
const colorButton = document.getElementById("button")

function handleToggle(e){
    if(colorState===1) //Set Azul
    {
        colorTag.classList.remove("vermelho")
        colorTag.classList.add("azul")
        colorTag.innerHTML = "Azul"
        colorButton.classList.remove("vermelho")
        colorButton.classList.add("azul")

        colorState = 0
    }

    else //Set Vermelho
    {
        colorTag.classList.remove("azul")
        colorTag.classList.add("vermelho")
        colorTag.innerHTML = "Vermelho"
        colorButton.classList.remove("azul")
        colorButton.classList.add("vermelho")  

        colorState = 1
    }
}