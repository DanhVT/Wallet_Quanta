import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app.component';
import { HomeModule } from './components/home/home.module';
import { RegisterModule } from './components/register/register.module';

import { routes } from './app.routes';
/**
 * Import material UI Components
 */
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true }),
        HomeModule,
        RegisterModule
    ],
    declarations: [
        AppComponent    
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
       
    ]
})

export class AppModule { }
// Declare process variable
declare var process;

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);