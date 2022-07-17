import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display-block',
  templateUrl: './weather-display-block.component.html',
  styleUrls: ['./weather-display-block.component.scss']
})
export class WeatherDisplayBlockComponent implements OnInit {
  @Input() weatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
