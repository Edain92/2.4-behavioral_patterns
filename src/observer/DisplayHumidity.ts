export class DisplayHumidity implements Listener {
  update(weatherMeasurements: WeatherMeasurements) {
    console.log(`Humidity (%): ${weatherMeasurements.humidity}%`)
  }
}
