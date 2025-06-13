/*-- this is from watching the video 52 part 2--*/


(function(window) {
  var helloSpeaker = {};
  var speakWord = "Hello"; // Declare a variable to hold the string "Hello" from the video
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  // Log the speakWord and name to the console
  window.helloSpeaker = helloSpeaker;
  
})(window); 

