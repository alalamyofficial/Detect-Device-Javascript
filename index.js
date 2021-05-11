


$('#detect-button').click(function(){
  
  var detector = new MobileDetect(window.navigator.userAgent)
  
  document.getElementById('elements').innerHTML = 
  [ 

   "Mobile: " + detector.mobile() +"<br>",
   "Phone: " + detector.phone() +"<br>",
   "Tablet: " + detector.tablet() +"<br>",
   "OS: " + detector.os() +"<br>", 
   "userAgent: " + detector.userAgent() +"<br>",
   "isIphone: " + detector.is('iPhone') +"<br>",      // false
   "isBot: " + detector.is('bot') ,         // false
   "Version: " + detector.version('Webkit') +"<br>" ,        // 534.3
   "Build: " + detector.versionStr('Build') +"<br>",        // '4.1.A.0.562'
   "playstation|xbox: " +detector.match('playstation|xbox') 
   
  ];

});
