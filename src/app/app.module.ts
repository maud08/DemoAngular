import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EnfantComponent } from './home/enfant/enfant.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ToTimePipe } from './pipes/to-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EnfantComponent,
    NavigationComponent,
    FourOFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
