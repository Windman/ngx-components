import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MkAngularControlsModule } from 'mk-angular-controls';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MkAngularControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
