 (function(){
  var $body = document.querySelector("body");
  $body.classList.remove('no-js');
  $body.classList.add('js');

  

  //Fazer o botão toggle funcionar

  var menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1024 
})
})()

 