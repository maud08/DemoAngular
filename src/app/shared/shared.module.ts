import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { ToTimePipe } from '../pipes/to-time.pipe';
import { HighlightDirective } from '../Directives/highlight.directive';
import { FourOFourComponent } from '../four-o-four/four-o-four.component';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
    FourOFourComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
    FourOFourComponent,
  ]
})
export class SharedModule { }
