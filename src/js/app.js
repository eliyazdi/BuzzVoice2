/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');


var main = new UI.Card({
  title: 'BuzzVoice',
  body: 'Press the middle button to start listening.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();


var Voice = require('ui/voice');
var Vibe = require('ui/vibe');


var vibeText = function(text){
 

  text = text.toLowerCase();
   console.log(text);
  for(var i=0;i<text.length;i++){
    console.log(i);
    console.log(text.charAt(i));
    Vibe.vibrate(text.charAt(i)); // this should be made lowercase
  }
  
};
main.on('click', 'select', function(e){

  Voice.dictate('start', false, function(e) {
  if (e.err) {
    console.log('Error: ' + e.err);
    return;
  }
   
 main.body(e.transcription);

 main.on('click', 'up', function(e){

  vibeText(main.body);
  }

      


});
});