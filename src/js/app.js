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
//var Clock = require('clock');


/*
var morse = {
  "a":function(){
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },
  "A":function(){
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },
  "b":function(){

      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('short');
          setTimeout(function(){
            Vibe.vibrate('short');
          },750);
        },750);
      },1000);

  },
  "B":function(){

      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('short');
          setTimeout(function(){
            Vibe.vibrate('short');
          },750);
        },750);
      },1000);

  },
  "c":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },750);
  },1000);
},
  "C":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },750);
  },1000);
},

"d":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short'); 
    },750);
  },1000);
},
"D":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short'); 
    },750);
  },1000);
},

"e":function(){
  Vibe.vibrate('short');
},
"E":function(){
  Vibe.vibrate('short');
},
  
"f":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },750);
  },750);
},
"F":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },750);
  },750);
},

"g":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
    },1000);
  },1000);
},
"G":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
    },1000);
  },1000);
},
"h":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },750);
  },750);
},
"H":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },750);
  },750);
},
"i":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
  },750);
},
"I":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
  },750);
},

"j":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
      },1000);
    },1000);
  },750);
},
"J":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
      },1000);
    },1000);
  },750);
},

"k":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
    },750);
  },1000);
},
"K":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
    },750);
  },1000);
},

"l":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },1000);
  },750);
},
"L":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },1000);
  },750);
},

"m":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
  },1000);
},
"M":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
  },1000);
},

"n":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
  },1000);
},
"N":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
  },1000);
},

"o":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
    },1000);
  },1000);
},
"O":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
    },1000);
  },1000);
},

"p":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },1000);
  },750);
},
"P":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('short');
      },1000);
    },1000);
  },750);
},

"q":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },1000);
  },1000);
},
"Q":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },1000);
  },1000);
},

"r":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
    },1000);
  },750);
},
"R":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
    },1000);
  },750);
},
"s":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
    },750);
  },750);
},
"S":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
    },750);
  },750);
},

"t":function(){
  Vibe.vibrate('long');
},
"T":function(){
  Vibe.vibrate('long');
},

"u":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
    },750);
  },750);
},
"U":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
    },750);
  },750);
},

"v":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },750);
},
"V":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },750);
},

"w":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
    },1000);
  },750);
},
"W":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
    },1000);
  },750);
},

"x":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },1000);
},
"X":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
      },750);
    },750);
  },1000);
},

"y":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
      },1000);
    },750);
  },1000);
},
"Y":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
      },1000);
    },750);
  },1000);
},

"z":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },1000);
  },1000);
},
"Z":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
      },750);
    },1000);
  },1000);
},

"0":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('long');
        },1000);
      },1000);
    },1000);
  },1000);
},

"1":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('long');
        },1000);
      },1000);
    },1000);
  },750);
},

"2":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('long');
        },1000);
      },1000);
    },750);
  },750);
},

"3":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('long');
        },1000);
      },750);
    },750);
  },750);
},

"4":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('long');
        },750);
      },750);
    },750);
  },750);
},

"5":function(){
  Vibe.vibrate('short');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('short');
        },750);
      },750);
    },750);
  },750);
},

"6":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('short');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('short');
        },750);
      },750);
    },750);
  },1000);
},

"7":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('short');
      setTimeout(function(){
        Vibe.vibrate('short');
        setTimeout(function(){
          Vibe.vibrate('short');
        },750);
      },750);
    },1000);
  },1000);
},

"8":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('short');
        },1000);
      },1000);
    },1000);
  },1000);
},

"9":function(){
  Vibe.vibrate('long');
  setTimeout(function(){
    Vibe.vibrate('long');
    setTimeout(function(){
      Vibe.vibrate('long');
      setTimeout(function(){
        Vibe.vibrate('long');
        setTimeout(function(){
          Vibe.vibrate('long');
        },1000);
      },1000);
    },1000);
  },1000);
},
  
  " ":function(){
  setTimeout(function(){},1000);
}

};
*/

var vibeText = function(text){
 
 /* Vibe.vibrate('h');
  Vibe.vibrate('e');
  Vibe.vibrate('l');
  Vibe.vibrate('l');
  Vibe.vibrate('o');*/
  text = text.toLowerCase();
   console.log(text);
  for(var i=0;i<text.length;i++){
    console.log(i);
    console.log(text.charAt(i));
    //morse[text.charAt(i)]();
    Vibe.vibrate(text.charAt(i)); // this should be made lowercase
  }
  
};
main.on('click', 'select', function(e){

  Voice.dictate('start', false, function(e) {
  if (e.err) {
    console.log('Error: ' + e.err);
    return;
  }
   
 //main.body(e.transcription);

      vibeText(e.transcription);


});
});