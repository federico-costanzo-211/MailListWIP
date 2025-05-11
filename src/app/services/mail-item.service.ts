import { Injectable } from '@angular/core';
import Mail from '../types/mail-type';

@Injectable({
  providedIn: 'root'
})
export class MailItemService {
  itemList: Mail[] = [
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
  ];

  getAllItems(): Mail[] {
    return this.itemList;
  }

  editItem(id: number, newItem: Mail): void {
    if (!this.itemList[id]){
      throw new Error("Item not found: Wrong ID.");
    } else {
      this.itemList[id] = newItem;
    }
  }

  deleteItem(id: number): void {
    if (!this.itemList[id]){
      throw new Error("Item not found: Wrong ID.");
    } else {
      this.itemList.filter((value) => {
        return value.id != id
      })
    }
  }
}
