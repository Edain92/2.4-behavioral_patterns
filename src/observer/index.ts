import { DisplayHumidity } from "./DisplayHumidity";
import { DisplayTemperature } from "./DisplayTemperature";
import { Socket } from "./Socket";

const socket = new Socket()

const displayHumidity = new DisplayHumidity()
const displayTemperature = new DisplayTemperature()

socket.addListener(displayHumidity)
socket.addListener(displayTemperature)

setInterval(() => {
  const weatherMeasurements: WeatherMeasurements = {
    temperature: Math.random() * 50,
    humidity: Math.random() * 100,
  };

  socket.setNewData(weatherMeasurements)
}, 1000);
