function lazyloadRspFooterElements(){
  var pageContents = '';
  if(document.querySelector('.item-review-page')){
    pageContents = document.querySelector('.item-review-page');
  }else if(document.querySelector('.shop-review-display')){
    pageContents = document.querySelector('.shop-review-display');
  }else if(document.querySelector('.contact-page')){
    pageContents = document.querySelector('.contact-page');
  }

  var footer = document.querySelector('.responsive-footer');
  if(pageContents !=='' && footer.style.display !== 'block'){
    var viewPortHeight = document.documentElement.clientHeight;
    var windowScrollHeight = window.pageYOffset;
    var contentHeight = pageContents.clientHeight;
    var elementToBottomView = viewPortHeight + windowScrollHeight - contentHeight;
    if(elementToBottomView > -100){
      document.querySelector('.responsive-footer').style.display = 'block';
      removeRspFooterChild();
      document.querySelector('.googlead_section').style.display = 'block';
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
}