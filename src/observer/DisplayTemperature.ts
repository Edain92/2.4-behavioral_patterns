export class DisplayTemperature implements Listener {
  update(weatherMeasurements: WeatherMeasurements) {
    console.log(`Temperature (ºC): ${weatherMeasurements.temperature}ºC`)
  }
}
