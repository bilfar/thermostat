'use strict';

var thermostat;
var count;

beforeEach(function() {
  thermostat = new Thermostat;
  });

describe('Thermostat', () => {

  describe('.temperature', () => {
    it('The thermostat should start at 20 degrees',() => {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('The thermostat should start with a Max temp of 25 degrees',() => {
      expect(thermostat.maxTemperature).toEqual(25);
    });
  });

  describe('.up', () => {
    it('The temperature can be increased', () => {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    describe('when power save is on', () => {
      it('Throws an error when the temperature is greater than the max', () => {
        for (count = 0; count < 5; count++) {
          thermostat.up();
        }
        expect(function() {thermostat.up();}).toThrowError("Ow it's hot");
      })
    })
    describe('when power save is off', () => {
      it('Throws an error when the temperature is greater than the max', () => {
        thermostat.powerSaveOff();
        for (count = 0; count < 12; count++) {
          thermostat.up();
        }
        expect(function() {thermostat.up();}).toThrowError("Ow it's hot");
      })
    })
  });

  describe('.down', () => {
    it('The temperature can be decreased', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('Throws an error when the temperature is 9 or below', () => {
      for (count = 0; count < 10; count++) {
        thermostat.down();
      }
      expect(function() {thermostat.down();}).toThrowError('NOOO ITS COLD');
    });
    it('Does not throw an error when the temperature is 10 or above', () => {
      for (count = 0; count < 9; count++) {
        thermostat.down();
      }
      expect(function() {thermostat.down();}).not.toThrowError('NOOO ITS COLD');
    });
  });

  describe('.powerSaveOff', () => {
    it('Sets the max temp to 32', () => {
      thermostat.powerSaveOff();
      expect(thermostat.maxTemperature).toEqual(32);
    });
  });

  describe('.powerSaveOn', () => {
    it('Sets the max temp to 25', () => {
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(thermostat.maxTemperature).toEqual(25);
    });
  });

  describe('.reset', () => {
    it('Resets the temperature to 20 degrees', () => {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('.currentEnergyUsage', () => {
    it('returns low-usage when < 18 degrees', () => {
      for (count = 0; count < 3; count ++) {
        thermostat.down();
      }
        expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    })
    it('returns medium-usage when < 25 degrees', () => {
        expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    })
    it('returns high-usage when >= 25 degrees', () => {
      for (count = 0; count < 5; count ++) {
        thermostat.up();
      }
        expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    })
  })
});
