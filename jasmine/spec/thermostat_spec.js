describe("thermostat",function(){

  var thermostat;

   beforeEach(function(){
     thermostat = new Thermostat();
   });

  it ("thermostat should start at 20 degrees", function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it ("should increase temperature with an up function", function(){
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it ("should decrease the temperature with a down function", function(){
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it ("has a minimum temperature of 10 degrees", function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it ("should have power-saver is on by default", function() {
    expect(thermostat.isPowerSaverOn()).toEqual(true);
  });

  it (" decide if power mode is on or off", function(){
    expect(thermostat.isMaxTemp()).toEqual(false)
  });

  it ("You can reset the temperature at 20 with a reset function", function(){
    for (var i = 0; i < 3; i++) {
      thermostat.up();
    }
    expect(thermostat.reset()).toEqual(20)
  });

});

describe('Power saver mode', function(){

  it ("set the max temperature on 25 degrees", function(){
    var thermostat = new Thermostat();
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
  expect(thermostat.currentTemp()).toEqual(25);
  });// it

});// describe

describe("Energy usage", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ("is low when temperature is 18 or less", function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toEqual("Low-usage");
  });

  it ("is medium when temperature is between 18 and 25", function() {
    expect(thermostat.energyUsage()).toEqual("Medium-usage");
  });
  it ("is up when temperature is more than 25", function(){
    thermostat.turnPowerSaverOff()
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual("High-usage");
  });


});
