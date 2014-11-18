var latestHash = null;

function defer(method) {
  if (window.$ && marked)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}

var popupStatus = 0;

function init() {
  $(window).bind('hashchange', load);
  $(window).resize(resizePopup);
  $("div.close").click(function() {
    disablePopup();
  });
  $(this).keyup(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup(); // function close pop up
    }
  });
  $("#popup-background").click(function() {
    disablePopup(); // function close pop up
  });
  load();
}

function resizePopup() {
  $('#popup').css('height', (0.8 * window.innerHeight) + 'px');
  $('#popup').css('width', (0.8 * window.innerWidth) + 'px');
}

function loadPopup() {
  if (popupStatus == 0) { // if value is 0, show popup
    $("#popup").fadeIn(0500); // fadein popup div
    $("#popup-background").css("opacity", "0.7"); // css opacity, supports IE7, IE8
    $("#popup-background").fadeIn(0001);
    popupStatus = 1; // and set value to 1
  }
}

function disablePopup() {
  if (popupStatus == 1) { // if value is 1, close popup
    $("#popup").fadeOut("normal");
    $("#popup-background").fadeOut("normal");
    $('#popup .popup-content').html("");
    popupStatus = 0; // and set value to 0
  }
}

function load() {
  var key = '/';
  key = window.location.pathname;
  if(key.length>1 && key.lastIndexOf('/') == (key.length-1) ){
    key = key.slice(0,-1)
  }
  // prevent reloading inside page
  if (key == latestHash) {
    scrollToAnchor();
    return;
  }


  $('.navbar-brand').removeClass('active');
  $('.nav li').removeClass('active');
  if (key === '/') {
    $('.navbar-brand').addClass('active');
  } else {
    debugger;
    $("a[href='" + key + "']").parent().addClass('active');
  }
  latestHash = key;

  $(".stl-link").click(showstl);

}

function scrollToAnchor() {
  var offset = $(window.location.hash).offset();
  if (!offset) return;
  offset = offset.top;
  $('html, body').animate({
    scrollTop: offset
  }, 0, 'easeInSine');
}




function showstl(event) {
  event.stopImmediatePropagation();
  var url = $(this).attr("data-url");
  if (!url) return;
  resizePopup();
  $('#popup .popup-content').html('<iframe class="render-viewer" src="' + url + '" sandbox="allow-scripts allow-same-origin">Viewer requires iframe.</iframe>');

  loadPopup();
}

defer(init);
