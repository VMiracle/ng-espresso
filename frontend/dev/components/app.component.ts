import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.style.css']
})

export class AppComponent {
    selectedField;
    paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id placerat nibh. Cras pellentesque facilisis lorem, ullamcorper lobortis leo vehicula at. Praesent euismod, tortor sit amet vulputate auctor, massa massa aliquet mauris, vel cursus est sem at felis. Nam vulputate porta nulla, vel aliquam nulla aliquet quis. Suspendisse porttitor nulla non ante egestas, at semper purus pulvinar. Suspendisse ornare maximus gravida. Etiam mattis finibus orci. Aliquam erat volutpat. Nunc eget feugiat augue, imperdiet hendrerit arcu. Maecenas quis dapibus ligula. Morbi suscipit suscipit ipsum nec aliquet. Praesent vel scelerisque nisi.";
    username = "empleado1";
    realname = "Víctor";
    lastname = "Miracle";
    password = "password";
    textInputs = [
        {"type":"text","classes":"col s12 m12 l12","id":"username","name":"username","target":this.username,"label":"Nombre de usuario","icon":"account-circle"},
        {"type":"text","classes":"col s12 m12 l12","id":"realname","name":"realname","target":this.realname,"label":"Nombre"},
        {"type":"text","classes":"col s12 m12 l12","id":"lastname","name":"lastname","target":this.lastname,"label":"Apellido"}
    ];
    checkbox;
    select_lmao;
    download_radio;

    /*
    //TODO: Autoresize triggering for textareas

    init(){
        $('textarea').trigger('autoresize');
    }
    */
}
