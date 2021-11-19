const audioAzul = new Audio('././samples/sound_azul.mp3')
const audioVermelho = new Audio('./samples/sound_vermelho.mp3')

function handleButtonPress(e){
    if(e.classList.value==="vermelho")
    {
        audioVermelho.play()
    }
    else
    {
        audioAzul.play()
    }
}