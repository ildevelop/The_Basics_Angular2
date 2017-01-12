"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var HelloAngular = (function () {
    function HelloAngular() {
        this.names = ['Ilya', 'Tanya', 'Masha', 'Natasha'];
    }
    HelloAngular.prototype.AdArticle = function (fname, lname) {
        console.log(" name:" + fname.value);
        console.log("second name:" + lname.value);
        this.names.push(fname.value);
        return false;
    };
    return HelloAngular;
}());
HelloAngular = __decorate([
    core_1.Component({
        selector: 'hello-angular',
        template: "<form action='ui large from segment'>" +
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
    }),
    __metadata("design:paramtypes", [])
], HelloAngular);
var HelloAngularAppModule = (function () {
    function HelloAngularAppModule() {
    }
    return HelloAngularAppModule;
}());
HelloAngularAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [HelloAngular],
        bootstrap: [HelloAngular]
    })
], HelloAngularAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
//# sourceMappingURL=main.js.map