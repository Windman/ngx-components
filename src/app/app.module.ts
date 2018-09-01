import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularControlsModule } from 'angular-controls';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
