import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Mail from '../../types/mail-type';
import { MailItemService } from '../../services/mail-item.service';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})

export class EditPageComponent {
  private id: number;
  private mailItemService: MailItemService = inject(MailItemService);
  editForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder){
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
    })
    
    //Form

    let item: Mail;

    try {
      item = this.mailItemService.getItem(this.id);

      this.editForm = this.fb.group({
        email: [item.email ?? "", [Validators.required, Validators.email]],
        name: [[item.name], [Validators.required]],
        description: [item.description]
      })
    } catch {
      alert("Error: item not found.");
      this.router.navigate([""]);
    }
  }

  get email(){
    return this.editForm.get("email")!;
  }

  get name(){
    return this.editForm.get("name")!;
  }

  get description(){
    return this.editForm.get("description")!;
  }

  onFormSubmit(): void {
    let editedItem: Mail = this.editForm.value;
    
    this.mailItemService.editItem(this.id, editedItem);
    
    alert("Value modified successfully.");
    this.router.navigate([""]);
  }
}
