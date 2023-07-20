import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // idk (does it automatically)
    AppComponent
  ],
  imports: [
    // whenever you use an import,
    // put it in here (ex: forms module)
    BrowserModule
  ],
  providers: [],
  // whatever you are boot strapping
  bootstrap: [AppComponent]
})
export class AppModule { }
