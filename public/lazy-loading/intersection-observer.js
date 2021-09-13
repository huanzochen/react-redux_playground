

let options = {
    root: null,
    rootMargin: '0px',
    threshold: [0,0.5]
}
let callback = (entries, observer) => {
    // console.log(entries)
    // console.log(observer)
    entries.forEach(entry => {
        console.log(entry)
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
}

let observer = new IntersectionObserver(callback, options);

let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')

// observer.observe(p1)
observer.observe(p2)