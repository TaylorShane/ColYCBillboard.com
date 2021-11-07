import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  counter = 0;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    setInterval(() => {
      this.updateCounter();
    }, 20 * 1000);
  }

  updateCounter() {
    this.counter++;
    if (this.counter === 4) {
      this.counter = 0;
    }
  }
}
