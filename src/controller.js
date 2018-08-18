$( document ).ready(function() {
  var thermostat = new Thermostat();

  $("#current_temp").text(thermostat.getCurrentTemperature());
  $("#usage").text(thermostat.currentEnergyUsage());

  $("#plus").click(function() {
    thermostat.up();
    $("#current_temp").text(thermostat.getCurrentTemperature());
    $("#usage").text(thermostat.currentEnergyUsage());
  });

  $("#minus").click(function() {
    thermostat.down();
    $("#current_temp").text(thermostat.getCurrentTemperature());
    $("#usage").text(thermostat.currentEnergyUsage());
  });
  $("#reset").click(function() {
    thermostat.reset();
    $("#current_temp").text(thermostat.getCurrentTemperature());
    $("#usage").text(thermostat.currentEnergyUsage());
  })
  $("#ps_off").click(function() {
    thermostat.powerSaveOff();
    $("#usage").text(thermostat.currentEnergyUsage());
  })
  $("#ps_on").click(function() {
    thermostat.powerSaveOn();
  $("#usage").text(thermostat.currentEnergyUsage());
  })
  $('#current-city').change(function() {
    var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fa84effbbc8cefc039ffc35edfd61842&units=metric', function(data) {
    console.log(data.main.temp);
    $('#current-temperature').text(data.main.temp)
  })
})


});
