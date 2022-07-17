import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  weatherForm!: FormGroup;
  weatherData: any = {};
  readonly key = "37076fc74766499ab0691736221607";

  constructor() { }

  ngOnInit(): void {
    this.weatherForm = new FormGroup({
      city: new FormControl("Lol", [Validators.required]),
      days: new FormControl(3, [Validators.min(0), Validators.max(3), Validators.required])
    });
  }

  onSubmit() {
    http://api.weatherapi.com/v1/forecast.json?key=37076fc74766499ab0691736221607&q=Paris&days=2&aqi=no&alerts=no
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.weatherForm.value.city}&days=${this.weatherForm.value.days}&aqi=no&alerts=no`)
      .then((data) => data.json())
      .then((json) => {
        this.weatherData = json;
        console.log(this.weatherData);
      })
  }
}
