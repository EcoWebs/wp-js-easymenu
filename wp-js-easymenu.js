function getEasyMenuStatus() {
  var status = $.cookie('wp_easy_menu_status');
  if ([undefined, null, false, "undefined", "null", "false"].indexOf(status) >= 0) {
    return false;
  } else {
    return true;
  }
}

function toggleEasyMenuStatus() {
  $.cookie('wp_easy_menu_status', !getEasyMenuStatus());
  if (getEasyMenuStatus()) {
    $('body').addClass('easy_menu_off');
  } else {
    $('body').removeClass('easy_menu_off');
  }
}


$(function () {
  
  
  $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/EcoWebs/wp-js-easymenu/1bd74406/wp-js-easymenu.css">');


  var t_menu = $('#wp-admin-bar-root-default');
  var easy_menuToggle = $('<li id="easy-toggle-menu" class="menupop"><a class="ab-item" href="#">Cambiar Modo</a></li>').appendTo(t_menu);

  easy_menuToggle.on('click', function () {
    toggleEasyMenuStatus();
  });
  
  if (getEasyMenuStatus()) {
    $('body').addClass('easy_menu_off');
  } else {
    $('body').removeClass('easy_menu_off');
  }
});
