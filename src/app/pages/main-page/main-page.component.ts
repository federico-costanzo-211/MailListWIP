import { Component } from '@angular/core';
import Mail from '../../types/mail-type';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  items: Mail[] = [
    {
      id: 0,
      email: "placeholder@gmail.com",
      name: "Placeholder",
      description: "placeholder",
    },
    {
      id: 1,
      email: "placeholder2@gmail.com",
      name: "placeholder",
      description: "placeholder",
    },
    {
      id: 2,
      email: "placeholder3@gmail.com",
      name: "placeholder",
      description: "placeholder",
    }
  ]
}
