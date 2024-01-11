import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.css'
})
export class RepoComponent {
  constructor(
    private formBuilder : FormBuilder
  ) {}

  repoSearch = this.formBuilder.group({
    userName: ''
  })

  onSubmit(): void {
    console.log(this.repoSearch.value);
    this.repoSearch.reset();
  }
}
