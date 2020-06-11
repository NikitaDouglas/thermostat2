function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.PS_ON_MAX = 25;
  this.PS_OFF_MAX = 32;
  this.LOW_USAGE = 18;

};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  }
  return this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  return this.temperature --;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.MINIMUM_TEMP;
};

Thermostat.prototype.isPowerSaverOn = function() {
  return this.powerSavingMode === true;
};
Thermostat.prototype.turnPowerSaverOff = function () {
  return this.powerSavingMode = false;
};
Thermostat.prototype.turnPowerSaverOn = function () {
  if (this.temperature > 25) {
    this.temperature = 25;
  }
  return this.powerSavingMode = true;
};
Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSaverOn() === false) {
    return this.temperature === this.PS_OFF_MAX;
  }
  return this.temperature === this.PS_ON_MAX;
}

Thermostat.prototype.reset = function() {
  return this.temperature = 20;
};

Thermostat.prototype.energyUsage =  function() {
  if (this.currentTemp() <= this.LOW_USAGE) {
    return "Low-usage";
  }
  else if (this.currentTemp() <= this.PS_ON_MAX) {
    return "Medium-usage";
  }
  return "High-usage"
};
