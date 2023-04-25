function lazyloadFooterElements() {
  var elList = [
    '#rui-flexible-necklace-ad',
    '.event-banner',
    '.hotkey-footer-section',
    '.shop-footer',
    '.googlead_section',
  ]
  for (var i = 0; i < elList.length; i++) {
    var el = document.querySelector(elList[i])
    if (elList[i] === '.googlead_section' && el.style.display !== 'block') {
      var viewPortHeight = document.documentElement.clientHeight
      var windowScrollHeight = window.pageYOffset
      var elementOffsetTop = el.parentElement.offsetTop
      var elementToBottomView = viewPortHeight + windowScrollHeight - elementOffsetTop
      if (elementToBottomView > -100) {
        el.style.display = 'block'
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      }
    } else if (el.style.display !== 'block') {
      var viewPortHeight = document.documentElement.clientHeight
      var windowScrollHeight = window.pageYOffset
      var elementOffsetTop = el.parentElement.offsetTop
      var elementToBottomView = viewPortHeight + windowScrollHeight - elementOffsetTop
      if (elementToBottomView > -100) {
        el.style.display = 'block'
      }
    }
  }
}
