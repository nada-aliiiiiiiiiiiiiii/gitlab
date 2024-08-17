import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./auth/components/register/register.component";
// import { RegisterComponent } from './auth/components/register/register.component';

@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  standalone:true,
  imports: [RouterOutlet, RegisterComponent]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
}
