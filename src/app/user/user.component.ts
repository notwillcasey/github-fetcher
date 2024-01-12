import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userProfileData: User;

  constructor(
    private formBuilder : FormBuilder,
    private userService: UserService
  ) {}

  userSearch = this.formBuilder.group({
    userName: ''
  })

  onSubmit(): void {
    let userName = this.userSearch.get(['userName'])?.value;
    this.userService.getUserProfile(userName).subscribe((userProfile) => {
      this.userProfileData = userProfile;
    })
    this.userSearch.reset();
  }

}
