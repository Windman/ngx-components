import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgControlsModule } from 'ng-controls';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
