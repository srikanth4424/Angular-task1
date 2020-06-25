import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { User } from './users-detail/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=40`);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/${id}?`
    );
  }

  searchUsers(text) {
    return this.http.get(`https://api.github.com/search/users?q=${text}`).pipe(
      map((data: any) => data.items));
  }
}
