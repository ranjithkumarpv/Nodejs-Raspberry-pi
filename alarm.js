var Gpio = require('onoff').Gpio,
  buzzer = new Gpio(3, 'out'); 
 
buzzer.watch(function(err, value) {
  if (err) exit();
});


function exit() {
  buzzer.unexport();
	console.log("Good Bye!");
  process.exit();
}
 
process.on('SIGINT', exit);