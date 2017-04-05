import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home.component';
import { SidebarComponent } from "./sidebar/sidebar.component";


import { RouterModule } from '@angular/router';
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ HomeComponent, SidebarComponent ],
    exports:      [ HomeComponent ],
})
export class HomeModule { }