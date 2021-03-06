// LED has a Short Leg and Long Leg
// Short Leg should be connected with GND
// Long leg should be connected with Pin 7 (or GPIO 4).


var gpio = require('pi-gpio'); //#A
var pin = 7; // It means GPIO 4, It is connected with Long Leg of LED.

function blink(outPin, frequency, status) { //#B
  gpio.write(outPin, status, function () { //#D // This piece of code interact with hardware
  console.log('Setting GPIO to: ' + status);
    setTimeout(function () { //#E
      status = (status + 1) % 2;
      blink(outPin, frequency, status);
    }, frequency);
  });
}

process.on('SIGINT', function () { //#F
  gpio.write(pin, 0, function () {
    gpio.close(pin); //#G
    console.log('Bye, bye!');
    process.exit();
  });
});

// This is a place where a function starts executing the program.
gpio.open(pin, "output", function (err) { //#C
  blink(pin, 2000,1); //#H
});

// #A Importing the GPIO management library
// #B A blink function with the pin to activate, the blinking frequency and the initial status as parameters
// #C Initialize the pin in output mode, once this is ready the anonymous function will be called
// #D Write the current status to the pin
// #E Once the status has been written we set a timer to recursively call blink
// #F Listen to the even triggered when the program is about the exit
// #G Cleanly close the GPIO pin before exiting
// #H Call the blink function for pin #7 with a blinking speed of 2 seconds
