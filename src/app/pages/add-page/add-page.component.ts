import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Mail from '../../types/mail-type';
import { MailItemService } from '../../services/mail-item.service';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.scss'
})

export class AddPageComponent {
  private id: number;
  private mailItemService: MailItemService = inject(MailItemService);
  addForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder){
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
    })

    this.addForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required]],
      description: [""]
    })
  }

  get email(){
    return this.addForm.get("email")!;
  }

  get name(){
    return this.addForm.get("name")!;
  }

  get description(){
    return this.addForm.get("description")!;
  }

  onFormSubmit(): void {
    let newItem: Mail = this.addForm.value;
    
    this.mailItemService.addItem(newItem);
    
    alert("Value added successfully.");
    this.router.navigate([""]);
  }
}
