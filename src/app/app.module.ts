import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherPanelMainComponent } from './Panels/weather-panel-main/weather-panel-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponentsComponent } from './components/all-components/all-components.component';

@NgModule({
  declarations: [AppComponent, WeatherPanelMainComponent, AllComponentsComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
