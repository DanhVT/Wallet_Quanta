import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPassPharseComponent } from './components/register/registerPassPhrase/passPhrase.component';

export const routes: Routes = [ 
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'register/passphrase', component: RegisterPassPharseComponent }
];