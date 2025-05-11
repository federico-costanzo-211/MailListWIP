import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router){
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

  openAddItem(){
    this.router.navigate(["/add"]);
  }
}
