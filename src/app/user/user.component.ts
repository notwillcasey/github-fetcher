import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private formBuilder : FormBuilder
  ) {}

  userSearch = this.formBuilder.group({
    userName: ''
  })

  onSubmit(): void {
    console.log(this.userSearch.value);
    this.userSearch.reset();
  }

}
