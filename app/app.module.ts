import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeModule }   from './components/home/home.module';
import { RegisterModule }   from './components/register/register.module';
import { routes } from './routes/app.routes';
@NgModule({
  imports:      [ 
        BrowserModule,
        BrowserAnimationsModule,
        HomeModule,
        RegisterModule,
        RouterModule.forRoot(routes, { useHash: true }) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }