
var htmlElement = document.querySelector('html')
var bgcolorForm = document.getElementById('bgcolor')

const initialization = () => {
    console.log('intialization... 檢查是否有初始值在 session Storage 中...')
    if(sessionStorage.getItem('bgcolor')) {
        htmlElement.style.backgroundColor = sessionStorage.getItem('bgcolor')
        bgcolorForm.value = sessionStorage.getItem('bgcolor')
    }
}

initialization()

function populateState() {
    console.log('populate state in sessionStorage')
    sessionStorage.setItem('bgcolor', document.getElementById('bgcolor').value)
    setStyles()
}

const setStyles = () => {
    var bgcolorValue = sessionStorage.getItem('bgcolor')
    htmlElement.style.backgroundColor = bgcolorValue
    console.log('the bgcolorValue in sessionStorage is= ' + bgcolorValue)
}

bgcolorForm.onchange = populateState;