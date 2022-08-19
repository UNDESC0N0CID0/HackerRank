import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  celcius:number;
  fahrenheit:number;
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  celciuschange(celcius:number) {
    let C = celcius;
    let F = C*9/5 + 32;
    this.fahrenheit = Math.round(F*10)/10;
  }
  fahrenheitchange(fahrenheit:number) {
    let F:number = fahrenheit;
    let C = (F - 32) * 5/9;
    this.celcius = Math.round(C * 10) / 10;
  }
}
