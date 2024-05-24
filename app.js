document.getElementById('btn').addEventListener('click', changeColor)

function changeColor() {
    let hexColor = generateHexColor()
    document.body.style.backgroundColor = hexColor
    document.getElementById('hexCode').innerText = hexColor
}

function generateHexColor() {
    let hexCharacter = '0123456789ABCDEF'
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacter[Math.floor(Math.random() * 16)]
    }
    return hexColor
}




















