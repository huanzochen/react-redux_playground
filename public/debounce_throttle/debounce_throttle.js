const nameBarDebounceElement = document.querySelector('#name-debounce')
const clickTimesDebounceElement = document.querySelector('#click-times-debounce')
let inputFiredTimesDebounce = 0

function handleNameBarChangeDebounce(event) {
    console.log(`debounce! ${inputFiredTimesDebounce}`)
    inputFiredTimesDebounce++
    clickTimesDebounceElement.innerText = inputFiredTimesDebounce
}

// debounce 一段 delay 後在執行該 function, 如果又有新的東西進來就重新計算 delay
function debounce(func, delay){
    // console.log(this)
    let timeout = null
    return function(){
        // 我要 addEventListener 的這個 object.
        let context = this
        // 傳進來的 arguments. 根據 addEventListener 的敘述是 eventHandler 的 events
        let args = arguments

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, delay)
    }
}
nameBarDebounceElement.addEventListener('keyup', debounce(handleNameBarChangeDebounce,1000))


const nameBarThrottleElement = document.querySelector('#name-throttle')
const clickTimesThrottleElement = document.querySelector('#click-times-throttle')
let inputFiredTimesThrottle = 0

function handleNameBarChangeThrottle(event) {
    console.log(`throttle! ${inputFiredTimesThrottle} `)
    inputFiredTimesThrottle++
    clickTimesThrottleElement.innerText = inputFiredTimesThrottle
}

// throttle 執行一段 function 後延遲一段 delay, 可以搭配 debounce 一起使用
function throttle(func, delay){
    let inThrottle = false
    let timeout = null

    return function(){
        let context = this
        let args = arguments
        
        if(!inThrottle){
            func.apply(context, args)
            inThrottle = true
            clearTimeout(timeout)
            timeout = setTimeout(function(){
                inThrottle = false
            }, delay)
        }
    }
}

nameBarThrottleElement.addEventListener('keyup', throttle(handleNameBarChangeThrottle, 1000))


const nameBarMixElement = document.querySelector('#name-mix')
const clickTimeMixElement = document.querySelector('#click-times-mix')
let inputFiredTimesMix = 0

function handleNameBarChangeMix(event) {
    console.log(`mix! ${inputFiredTimesMix}`)
    inputFiredTimesMix++
    clickTimeMixElement.innerText = inputFiredTimesMix
}

function mixDebounceThrottle(func, delay) {
    let inThrottle = false
    let timeoutDebounce = null
    let timeoutThrottle = null

    return function() {
        let context = this
        let args = arguments
        clearTimeout(timeoutDebounce)
        if(!inThrottle){
            inThrottle = true
            timeoutDebounce = setTimeout(function(){
                func.apply(context, args)
            }, delay)
            clearTimeout(timeoutThrottle)
            timeoutThrottle = setTimeout(function(){
                inThrottle = false
            })
        }
    }
}

nameBarMixElement.addEventListener('keyup', mixDebounceThrottle(handleNameBarChangeMix, 1000))

// function testThis(func) {
//     console.log(this)
// }
// nameBarElement.addEventListener('keyup', function(){
//    console.log(this)
// }())


/**
 * ref: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
 * change events fire when the user commits a value change to a form control. 
 * This may be done, for example, by clicking outside of the control or by using the 
 * Tab key to switch to a different control.
 * onchange 就是 change 的 event handler 版本
 */
// nameBarElement.onchange = handleNameBarChangeDebounce

/**
 * ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
 * change event 會在 input 結束後才觸發
 */
// nameBarElement.addEventListener('change', handleNameBarChangeDebounce)