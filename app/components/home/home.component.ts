import { Component, ViewEncapsulation } from '@angular/core';
// const template: string = require("./home.component.html");
declare let $:any
@Component({
	selector: 'home',
	templateUrl: './app/components/home/home.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app/components/home/home.css']
})
export class HomeComponent{
	
}