import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare let $:any;

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`
})

export class AppComponent implements AfterContentInit{
    constructor(private route: ActivatedRoute,
		private router: Router){
        
    }
    
    loadWalletFromLocal(){
        
    }
     ngAfterContentInit(){
        $('.loading-animation').hide();
     }
}