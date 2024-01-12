import { Injectable } from '@angular/core';
import { Repo } from '../interfaces/repo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private baseUrl = 'http://localhost:5175/api'
  constructor(private http: HttpClient) { }

  getUserProfile(userName: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseUrl}/userrepos/${userName}`)
  }
}
