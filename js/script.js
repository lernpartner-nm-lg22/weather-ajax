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
    this.elemenCity = document.getElementById('city');
    this.elementTemp = document.getElementById('temp');
    this.elementHumidity = document.getElementById('humidity');

    this.elementOkButton.addEventListener('click', event => this.doOkClick(event));
  }
  /**
   * Function that handles the click event
   * @param {*} event 
   */
  async doOkClick(event) {
    const city = this.elemenCity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appId}`;
    const response = await fetch(url);
    const data = await response.json();

    this.elementTemp.textContent = data.main.temp;

  }

}

const weather = new Weather("Your Openweahter Map code here");