import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent} from './register.component';
import { RegisterPassPharseComponent} from './registerPassPhrase/passPhrase.component';

import { RouterModule } from '@angular/router';
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ RegisterComponent, RegisterPassPharseComponent],
    exports:      [ RegisterComponent ],
})
export class RegisterModule { }