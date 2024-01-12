import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:5175/api'
  constructor(private http: HttpClient) { }

  getUserProfile(userName: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/userprofile/${userName}`)
  }

}
