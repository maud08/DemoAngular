import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { ToTimePipe } from '../pipes/to-time.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe
  ]
})
export class SharedModule { }
