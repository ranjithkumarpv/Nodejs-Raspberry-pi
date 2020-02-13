var sensorLib = require('node-dht-sensor'); 
 
var sensor = {
    initialize: function () {
        return sensorLib.initialize(22, 4); // here GPIO4 means pin7 n
    },
    read: function () {
        var readout = sensorLib.read();
       var value={"tempValue":readout.temperature.toFixed(2),"unitOfMeasurement":"C","humidityValue":readout.humidity.toFixed(2)}; 
       	  
	console.log('Current temperature value: ' + readout.temperature.toFixed(2)
 + 'C'+' and humidity value: ' + readout.humidity.toFixed(2) + '%'); 
        setTimeout(function () {
            sensor.read();
        }, 4500);
    }
}; 
if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}