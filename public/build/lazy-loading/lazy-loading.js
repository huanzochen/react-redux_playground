let lazyImages

window.addEventListener('load', () => {
    lazyImages = document.querySelectorAll('.img.lazy')
    createObserver()
})


const removeMockup = (event) => {
    console.log('loaded')
    const mockup = event.target.previousElementSibling
    mockup.addEventListener('transitionend', mockup.remove)
    mockup.classList.remove('loading')
    mockup.classList.add('fade-out')
}

const loadImage = (img) =>{
    img.previousElementSibling.classList.add('loading')
    img.setAttribute('src', img.dataset.src)
    img.removeAttribute('data-src')
    console.log('img.addEventListener')
    img.addEventListener('load', removeMockup)
}

const handleIntersect = (entries, observer) => {
    for(let [i, entry] of entries.entries()){
        if(entry.isIntersecting){
            console.log(entry)
            loadImage(entry.target)
            observer.unobserve(entry.target)
        }
    }
}

const createObserver = function(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    for(let image of lazyImages){
        observer.observe(image)
    }
}