import { useEffect } from 'react'

let listenerCallbacks = new WeakMap()

let watcher

function intersectionsCallback(entries, observer) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target)

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        watcher.unobserve(entry.target)
        listenerCallbacks.delete(entry.target)
        cb()
      }
    } 
  })
}

function getIntersectionObserver() {
  if (watcher === undefined) {
    watcher = new IntersectionObserver(intersectionsCallback, {
      root: null,
      threshold: [0.1]
    })
  }
  return watcher
}

export function useIntersection(element, callback) {
  useEffect(() => {
    // element 要是個 ref()
    let target = element.current 
    let observer = getIntersectionObserver()
    listenerCallbacks.set(target, callback)
    observer.observe(target)

    return () => {
      listenerCallbacks.delete(target)
      observer.unobserve(target)
    }
  })
}