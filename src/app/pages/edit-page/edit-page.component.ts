import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent {
  id: number;
  editForm;

  constructor(private route: ActivatedRoute, private fb: FormBuilder){
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
    })

    this.editForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      name: [[""], [Validators.required]],
      description: [""]
    })
  }

  get email (){
    return this.editForm.get("email")!;
  }

  get name (){
    return this.editForm.get("name")!;
  }

  get description (){
    return this.editForm.get("description")!;
  }
}
