const schemeSelect = document.getElementById('scheme-select')
const colourSelect = document.getElementById('colour-select')
const getSchemeBtn = document.getElementById('get-scheme-btn')

getSchemeBtn.addEventListener('click', ()=> {
    console.log(colourSelect.value.substring(1))
   response = fetch(`https://www.thecolorapi.com/scheme?hex=${colourSelect.value.substring(1)}&mode=${schemeSelect.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colorData = data
            renderColors(colorData)
        })
})

function renderColors (colorData) {
    html = ""
    console.log(colorData)
    colorData.colors.forEach(color => {
        html += `<div id="color-column">
                <div id="color-container" style="background-color:${color.hex.value}">
                </div>
                <p id="hex-code">${color.hex.value}</p>
                </div>
                `
    })
    console.log(html)
    document.getElementById('swatch-container').innerHTML = html

}