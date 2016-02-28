/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');


var main = new UI.Card({
  title: '*BuzzVoice*',
  body: 'Press the middle button to start listening.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

var Voice = require('ui/voice');
var Vibe = require('ui/vibe');
//var Clock = require('clock');

var vibeText = function(text) {
 
  if (main.body() != 'Press the middle button to start listening.') {
    text = text.toLowerCase();
    console.log(text);
    for(var i=0;i<text.length;i++){
      console.log(text.charAt(i));
      Vibe.vibrate(text.charAt(i));
    }
  }
  
};

main.on('click', 'select', function(e) {

  Voice.dictate('start', false, function(e) {
    if (e.err) {
      console.log('Error: ' + e.err);
      return;
    }
    main.body(e.transcription);
  });
  
});

main.on('click', 'up', function(e){
  console.log("main.body: ");
  console.log(main.body());
  vibeText(main.body());
});