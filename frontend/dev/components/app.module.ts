import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

import { AppComponent } from './app.component';
import { Hello } from './app.hello';
import { About } from './app.about';

import { MaterializeModule } from 'ng2-materialize';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

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
    FormsModule,
    UIRouterModule.forRoot({
      states: [ helloState, aboutState ],
      useHash: true
    }),
    MaterializeModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
