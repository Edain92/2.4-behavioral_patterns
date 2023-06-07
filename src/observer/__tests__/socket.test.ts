import { DisplayHumidity } from "../DisplayHumidity";
import { DisplayTemperature } from "../DisplayTemperature";
import { Socket } from "../Socket";

describe('Testing Socket', () => {
  let socket: Socket

  beforeEach(() => {
    socket = new Socket();
  });

  test('GIVEN a socket, WHEN is called addListener() THEN listeners.length should have one position more', () => {
    const displayHumidity = new DisplayHumidity();
    let currentListeners = socket.getListernersLength()

    socket.addListener(displayHumidity);

    expect(socket.getListernersLength()).toBe(++currentListeners)
  });

  test('GIVEN a socket, WHEN is called removeListener() THEN listeners.length should have one position less', () => {
    const displayTemperature = new DisplayTemperature();
    socket.addListener(displayTemperature);

    let currentListeners = socket.getListernersLength()
    socket.removeListener(displayTemperature);

    expect(socket.getListernersLength()).toBe(--currentListeners)
  });

  test('GIVEN a socket, WHEN is called setNewData() THEN it should show log with the new temperature', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const displayTemperature = new DisplayTemperature();
    socket.addListener(displayTemperature);

    const newWeatherMeasurements: WeatherMeasurements = { temperature: 20, humidity: 35 }
    socket.setNewData(newWeatherMeasurements)

    expect(consoleSpy).toHaveBeenCalledWith(`Temperature (ºC): ${newWeatherMeasurements.temperature}ºC`);

    consoleSpy.mockRestore();
  });
});
