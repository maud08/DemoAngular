import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { ToTimePipe } from '../pipes/to-time.pipe';
import { HighlightDirective } from '../Directives/highlight.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
