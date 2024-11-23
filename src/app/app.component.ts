import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'temperature-converter';
  inputTemperature: number | null = null; 
  selectedUnit: string = '°C'; 
  convertedTemperature: string = '0°C'; 

  convertTemperature() {
    if (this.inputTemperature === null) {
      this.convertedTemperature = '∅';
      return;
    }

    let convertedValue: number;

    switch (this.selectedUnit) {
      case '°C': // Convert to Celsius
        convertedValue = this.inputTemperature;
        this.convertedTemperature = `${convertedValue.toFixed(1)}°C`;
        break;

      case '°F': // Convert to Fahrenheit
        convertedValue = (this.inputTemperature * 9) / 5 + 32;
        this.convertedTemperature = `${convertedValue.toFixed(1)}°F`;
        break;

      case '°K': // Convert to Kelvin
        convertedValue = this.inputTemperature + 273.15;
        this.convertedTemperature = `${convertedValue.toFixed(1)}°K`;
        break;

      default:
        this.convertedTemperature = 'Invallid Input';
    }
  }
}
