
var thermostat = new Thermostat;

$(document).ready(function(){
  updateTemp();
  updateExternalTemp();
  $("#power-saving-status").html('on').css("background-color", "green");

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemp();
  });

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemp();
  });

  $("#powersaving-on").click(function() {
    thermostat.turnPowerSaverOn();
    $("#power-saving-status").html('on').css("background-color", "green");
    updateTemp();
  });

  $("#powersaving-off").click(function() {
    thermostat.turnPowerSaverOff();
    $("#power-saving-status").html('off').css("background-color", "red");;
  });
});

function updateTemp() {
  $("#Temperature").html(thermostat.currentTemp());
  $('#Temperature').attr('class', thermostat.energyUsage());
}

function updateExternalTemp() {
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=abc5597e86100be39e5d15328031e161", function(getWeather) {
    $("#externalTemperature").html(Math.round((getWeather.main.temp - 273.15) * 10)/10);
    console.log(getWeather)
  });
};

postData();

function postData() {
  $.post('http://localhost:4567/temperature',
    {
      temperature: 9000,
      status: 200
    }
  )
}
