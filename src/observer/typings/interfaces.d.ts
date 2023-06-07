interface Listener {
  update(weatherMeasurements: WeatherMeasurements): void
}

interface Observer {
  addListener(listener: Listener): void
  removeListener(listener: Listener): void
}
