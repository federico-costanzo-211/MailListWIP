import { Component, Input } from '@angular/core';
import { Router }  from "@angular/router";
import Mail from '../../types/mail-type';

@Component({
  selector: 'app-mail-list-item',
  standalone: false,
  templateUrl: './mail-list-item.component.html',
  styleUrl: './mail-list-item.component.scss'
})

export class MailListItemComponent {
  @Input() item: Mail;

  constructor(private router: Router){}

  openEditItem(): void{
    this.router.navigate(['/edit'],
      {
        queryParams: { id: this.item.id.toString() }
      }
    )
  }
}
