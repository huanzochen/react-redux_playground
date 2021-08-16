
var htmlElement = document.querySelector('html')
var bgcolorForm = document.getElementById('bgcolor')

const initialization = () => {
    console.log('intialization... 檢查是否有初始值在 local Storage 中...')
    if(localStorage.getItem('bgcolor')) {
        htmlElement.style.backgroundColor = localStorage.getItem('bgcolor')
        bgcolorForm.value = localStorage.getItem('bgcolor')
    }
}

initialization()

function populateState() {
    console.log('populate state in localStorage')
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value)
    setStyles()
}

const setStyles = () => {
    var bgcolorValue = localStorage.getItem('bgcolor')
    htmlElement.style.backgroundColor = bgcolorValue
    console.log('the bgcolorValue in localStorage is= ' + bgcolorValue)
}

bgcolorForm.onchange = populateState;