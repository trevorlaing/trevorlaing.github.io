


var speakWord = "Good Bye";

(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  // Log the speakWord and name to the console
  window.byeSpeaker = byeSpeaker;
})(window); 


