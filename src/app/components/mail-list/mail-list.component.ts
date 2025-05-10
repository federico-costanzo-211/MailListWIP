import { Component } from '@angular/core';
import Mail from "../../types/mail-type";

@Component({
  selector: 'app-mail-list',
  standalone: false,
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.scss'
})
export class MailListComponent {
  items: Mail[] = [
    {
      email: "placeholder@gmail.com",
      name: "Placeholder",
      description: "placeholder",
    },
    {
      email: "placeholder2@gmail.com",
      name: "placeholder",
      description: "placeholder",
    },
    {
      email: "placeholder3@gmail.com",
      name: "placeholder",
      description: "placeholder",
    }
  ]
}
