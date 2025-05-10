import { Component, Input } from '@angular/core';
import Mail from "../../types/mail-type";

@Component({
  selector: 'app-mail-list',
  standalone: false,
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.scss'
})
export class MailListComponent {
  @Input() items: Mail[];
}
