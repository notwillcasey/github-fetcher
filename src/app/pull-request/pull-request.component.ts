import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrl: './pull-request.component.css'
})
export class PullRequestComponent {
  constructor(
    private formBuilder : FormBuilder
  ) {}

  pullRequestSearch = this.formBuilder.group({
    userName: '',
    repoName: ''
  })

  onSubmit(): void {
    console.log(this.pullRequestSearch.value);
    this.pullRequestSearch.reset();
  }
}
