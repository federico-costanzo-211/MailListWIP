import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deletion = new EventEmitter<number>()

  constructor(private router: Router){}

  openEditItem(): void {
    this.router.navigate(['/edit'],
      {
        queryParams: { id: this.item.id.toString() }
      }
    )
  }

  deleteItem(): void {
    this.deletion.emit(this.item.id);
  }
}
