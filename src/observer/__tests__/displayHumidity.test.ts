import { DisplayHumidity } from "../DisplayHumidity";

describe('Testing DisplayHumidity', () => {
  let displayHumidity: DisplayHumidity

  beforeAll(() => {
    displayHumidity = new DisplayHumidity();
  });

  test('GIVEN a DisplayHumidity, WHEN is called update() THEN it should ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const weatherMeasurements: WeatherMeasurements = { temperature: 10, humidity: 35 }

    displayHumidity.update(weatherMeasurements);

    expect(consoleSpy).toHaveBeenCalledWith(`Humidity (%): ${weatherMeasurements.humidity}%`);

    consoleSpy.mockRestore();
  });
});
