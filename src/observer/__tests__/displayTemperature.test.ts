import { DisplayTemperature } from "../DisplayTemperature";

describe('Testing DisplayTemperature', () => {
  let displayTemperature: DisplayTemperature

  beforeAll(() => {
    displayTemperature = new DisplayTemperature();
  });

  test('GIVEN a DisplayTemperature, WHEN is called update() THEN it should ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const weatherMeasurements: WeatherMeasurements = { temperature: 10, humidity: 35 }

    displayTemperature.update(weatherMeasurements);

    expect(consoleSpy).toHaveBeenCalledWith(`Temperature (ºC): ${weatherMeasurements.temperature}ºC`);

    consoleSpy.mockRestore();
  });
});
