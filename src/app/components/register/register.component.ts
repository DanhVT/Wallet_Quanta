import { Component} from '@angular/core';
import { routerTransition } from './../../animation';
import { ActivatedRoute, Router } from '@angular/router';
const template: string = require("./register.component.html");
declare let $:any
@Component({
	selector: 'home',
	template,
	styleUrls:['./register.css'],
	animations: [ routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class RegisterComponent{
	constructor(private route: ActivatedRoute,
		private router: Router){

	}
}