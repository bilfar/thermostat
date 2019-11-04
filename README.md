# Thermostat

A simple thermometer simulation web-app in Javascript that increases/decreases temperature in response to user input. The app has a 'power saving mode' which lockes the increasing future. The App is Connected with the OpenWeatherMap API to retrieve and display city weather information.


* Thermostat displays current temperature
* Temperature can be altered using buttons
* Outdoor temperature is displayed using data from OpenWeather


## Specification

### Requirements

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function


## Technologies used

* Javascript 
* Jasmine
* JQuery
* HTML
* CSS
* OpenWeather API


## Approach to solving the problem.

My approach to solving this problem is to think first about what the program expected to do and how a user will interact with it. I then wrote user stories from the perspective of somebody using the program.


## How to run the code?

### Launching the Application

```
$ git clone https://github.com/bilfar/thermostat.git
$ cd thermostat
$ open thermostat.html
```

## Learning outcomes

This project is to introduce myself to Javascript frontend development 
and use Jasmine to Test-Drive Development of a thermostat. The following learning outcomes have been achieved:

* Javascript Prototype Constructor model
* JQuery to change DOM elements
* API calls, using the Open Weather API
* TDD using Jasmine
* CSS styling


## Author

This is a project by Nabil Far
