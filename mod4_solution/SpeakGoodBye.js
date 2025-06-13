

/*-- what i learned from speakhello.js --*/


(function(window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye"; // Declare a variable to hold the string "Good Bye" from the video
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  // Log the speakWord and name to the console
  window.byeSpeaker = byeSpeaker;
  
})(window); 


