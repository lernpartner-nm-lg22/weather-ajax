"use strict";

class Weather {
  /**
   * constructor of the Weather class, called when creating an object
   * store construction members
   */
  constructor(appId) {
    this.init();
    this.appId = appId;
  }

  /**
   * init function, connect the elements to JavaScript vars and create event handlers
   */
  init() {
    this.elementOkButton = document.getElementById('ok');
    this.elementCity = document.getElementById('city');
    this.elementTemp = document.getElementById('temp');
    this.elementHumidity = document.getElementById('humidity');
    this.elementCloud = document.getElementById('cloud')
    this.elementWind = document.getElementById('wind')

    this.elementOkButton.addEventListener('click', event => this.doOkClick(event));
    this.elementCity.addEventListener('keypress', event=> this.doKeypress(event))
  }
  /**
   * Function that handles the click event
   * @param {*} event 
   */
  async doOkClick(event) {
    const city = this.elementCity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appId}`;
    const response = await fetch(url);
    const data = await response.json();

    this.elementTemp.textContent = data.main.temp;
    this.elementHumidity.textContent = data.main.humidity;
    this.elementCloud.textContent = dete.weather[0].description;
    this.elementWind.textContent = data.wind.speed;

  }
  doKeyPress(event) {
    if(Event.key = "Enter")
    this.doOkClick(event);
  }

}

const weather = new Weather("34357060115ac4f3b93708499ef4443c");