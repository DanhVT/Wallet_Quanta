import { Component, ViewEncapsulation } from '@angular/core';
const template: string = require("./home.component.html");
declare let $:any
@Component({
	selector: 'home',
	template,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./home.css']
})
export class HomeComponent{
	
}