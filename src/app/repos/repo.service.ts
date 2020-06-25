import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getUserRepos(login) {
    return this.http.get(
      `${this.apiUrl}/${login}/repos?per_page=20&sort=created:asc}`
    );
  }
}
