export class Socket implements Observer {
  #listeners: Listener[] = []

  addListener(listener: Listener) {
    this.#listeners.push(listener)
  }

  removeListener(listener: Listener) {
    const index = this.#listeners.indexOf(listener);
    if (index !== -1) {
      this.#listeners.splice(index, 1);
    }
  }

  #notifyListeners(weatherMeasurements: WeatherMeasurements) {
    for (let listener of this.#listeners) {
      listener.update(weatherMeasurements);
    }
  }

  setNewData(weatherMeasurements: WeatherMeasurements) {
    this.#notifyListeners(weatherMeasurements)
  }

  getListernersLength() {
    return this.#listeners.length
  }
}
