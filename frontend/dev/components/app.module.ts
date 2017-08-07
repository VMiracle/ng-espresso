import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from "@uirouter/angular";

import { AppComponent } from './app.component';
import { Hello } from './app.hello';
import { About } from './app.about';

let helloState = { 
  name: 'hello', 
  url: '/hello', 
  component: Hello 
}; 
let aboutState = { 
  name: 'about', 
  url: '/about', 
  component: About 
};

@NgModule({
  declarations: [
    AppComponent,
    Hello,
    About
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: [ helloState, aboutState ],
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
