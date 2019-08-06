import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PhoneService } from './phone.service';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [AppComponent, ConsoleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
