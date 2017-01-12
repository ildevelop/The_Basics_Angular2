import { Component, NgModule }  from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({
    selector : 'hello-angular',
    template:"<form action='ui large from segment'>" +
        "<h3 class='ui header'>add new link</h3>" +
        "<div class='field'>" +
            "<label for='title'> First Name</label>" +
            "<input type='text' placeholder='Ivan' #NewFirstName>" +
        "</div>" +
        "<div class='field'>" +
            "<label for='title'>last Name</label>" +
            "<input type='text' placeholder='Ivanov' #NewLastName>" +
        "</div>" +

    "</form>" +
    "<button class='ui positive right floated button' (click)='AdArticle(NewFirstName,NewLastName)'>Send</button>" +
    "<ul>" +
                "<li *ngFor='let name of names'> Hello {{name}}!!" + "</li>" +
          "</ul> "
})
class HelloAngular{
    names:string [];

    constructor(){
        this.names=['Ilya','Tanya','Masha','Natasha'];
    }
    AdArticle(fname:HTMLInputElement,lname:HTMLInputElement){
        console.log(" name:"+fname.value);
        console.log("second name:"+lname.value);
        this.names.push(fname.value);
        return false;
    }
}

@NgModule({
    imports:[BrowserModule],
    declarations:[HelloAngular],
    bootstrap:[HelloAngular]
})
class HelloAngularAppModule{}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);