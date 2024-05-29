import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

//Interpolation
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `<p>Welcome, {{ username }}!</p>`,
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   username : String = 'Hisu';
// }

//Propertiy Binding
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NgOptimizedImage],
//   template: `<img [src]="imageUrl" width="200px" height="150px" alt="Logo">`
// })
// export class AppComponent {
//   imageUrl: string = 'https://docs.angularjs.org/img/Two_Way_Data_Binding.png';
// }

//Event Binding
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `<button (click)="sayHello()">Say Hello</button>`
// })
// export class AppComponent {
//   sayHello() {
//     alert('Hello!');
//   }
// }

//Two-way Binding
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <input [(ngModel)]="username" placeholder="Enter your name">
    <p>Your name is: {{ username }}</p>
  `
})
export class AppComponent {
  username: string = '';
}
