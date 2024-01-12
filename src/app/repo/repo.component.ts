import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RepoService } from './repo.service';
import { Repo } from '../interfaces/repo.interface';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.css'
})
export class RepoComponent {
  repoData: Repo[];
  
  constructor(
    private formBuilder : FormBuilder,
    private repoService: RepoService
  ) {}

  repoSearch = this.formBuilder.group({
    userName: ''
  })

  onSubmit(): void {
    let userName = this.repoSearch.get(['userName'])?.value;
    this.repoService.getUserProfile(userName).subscribe((repo) => {
      this.repoData = repo;
    })
    this.repoSearch.reset();
  }
}
