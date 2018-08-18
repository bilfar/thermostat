'use strict';

function Thermostat() {
  this.temperature = 20;
  this.maxTemperature = 25;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemperature) {
    this.temperature += 1
    return this.temperature
  } else {
    throw new Error ("Ow it's hot");
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error ('NOOO ITS COLD')
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.maxTemperature = 32;
}

Thermostat.prototype.powerSaveOn = function() {
  this.maxTemperature = 25;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  } else if (this.temperature < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
  }
