// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  var user = {};
  var navigatorObject = window.navigator;
  

  
  $('form').submit(function(event) {
    console.log('form submit');
    event.preventDefault();
    $.get('/api/getIp', function(data) {
      console.log('IP address: ', data);
      user.ipAddress = data;
      user.language = navigatorObject.language;
      user.software = navigator.appVersion;
      
      $('.results').html(JSON.stringify(user));
      //{"ipaddress":"208.45.168.2","language":"en-US","software":"Macintosh; Intel Mac OS X 10_11_6"}
    });
  });
  
  console.log(navigatorObject);
});
