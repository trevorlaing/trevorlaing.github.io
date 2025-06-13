
var speakWord = "Hello";

(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  // Log the speakWord and name to the console
  window.helloSpeaker = helloSpeaker;
})(window); 

