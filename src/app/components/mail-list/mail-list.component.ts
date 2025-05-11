import { Component, inject } from '@angular/core';

import { MailItemService } from '../../services/mail-item.service';
import Mail from "../../types/mail-type";

@Component({
  selector: 'app-mail-list',
  standalone: false,
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.scss'
})
export class MailListComponent {

  itemList: Mail[] = [];
  mailItemService: MailItemService = inject(MailItemService);
  
  constructor(){
    this.fetchItems();
  }

  //-------------------------------

  fetchItems(){
    this.itemList = this.mailItemService.getAllItems();
  }
 
  deleteItem(id: number){
    this.mailItemService.deleteItem(id);
    this.fetchItems();
  }
}
