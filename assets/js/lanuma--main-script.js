$(document).ready(function() {

  console.log("Podatki brskalnika");
  console.log("Cookies: " + navigator.cookieEnabled);
  console.log("Browser Language: " + navigator.browserLanguage);
  console.log("Language: " + navigator.language);
  console.log("Platform: " + navigator.platform);
  console.log("Connection Speed: " + navigator.connectionSpeed);
  console.log("User Agent: " + navigator.userAgent);
  console.log("Webdriver: " + navigator.webdriver);
  console.log("Geolocation: " + navigator.geolocation);

  function addToCartAlert() {
    alert('Izdelek je "dodan v košarico"');
    document.write ("Hvala");
  }
 
  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });

  var $cardInput = $('.input-fields input');
 
  $('.next-btn').on('click', function(e) {
  
    $cardInput.removeClass('warning');
  
    $cardInput.each(function() {    
      var $this = $(this);
      if (!$this.val()) {
        $this.addClass('warning');
      }
    })
  });
 
})
