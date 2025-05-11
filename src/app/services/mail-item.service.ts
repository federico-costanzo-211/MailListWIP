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

  //------------------------------

  getAllItems(): Mail[] {
    return this.itemList;
  }

  getItem(id: number): Mail {
    return this.itemList[id];
  }

  addItem(newItem: Mail){
    let highestId = 0;
    
    this.itemList.reduce(
      (prev: Mail, value: Mail, index: number, array: Mail[]): Mail => {
        if (!prev) {}
        else {
          if (prev.id < value.id) {
            highestId = value.id;
          }
        }

        return value;
      }
    );

    newItem.id = highestId + 1;
    this.itemList.push(newItem);
  }

  editItem(id: number, newItem: Mail): void {
    if (!this.itemList.find((value) => { return value.id == id })){
      throw new Error("Item not found: Wrong ID.");
    } else {      
      this.itemList[
        this.itemList.findIndex((value) => { return value.id == id })
      ] = newItem;
    }
  }

  deleteItem(id: number): void {
    if (!this.itemList.find((value) => { return value.id == id })){
      throw new Error("Item not found: Wrong ID.");
    } else {
      this.itemList = this.itemList.filter((value) => { return value.id !== id });
    }
  }
}
