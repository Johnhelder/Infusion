(function(){
  var $body = document.querySelector("body");
  $body.classList.remove('no-js');
  $body.classList.add('js');

  var $btnMenu = document.querySelector('.header_btnMenu');
  $btnMenu.removeAttribute('style');
});