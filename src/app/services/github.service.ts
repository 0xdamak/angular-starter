import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';
import { IUser } from '../models/user';
import { IRepo } from '../models/repo';
import { IContributor } from '../models/contributor';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getUser(username?: string): Observable<IUser> {
    const url = `${Constants.BASE_URL}/users/${username ?? 'angular'}`;
    return this.http.get<IUser>(url);
  }

  public getRepos(username?: string): Observable<IRepo[]> {
    const url = `${Constants.BASE_URL}/users/${username ?? 'angular'}/repos`;
    return this.http.get<IRepo[]>(url);
  }

  public getContributors(
    username: string | null,
    repo: string
  ): Observable<IContributor[]> {
    const url = `${Constants.BASE_URL}/repos/${
      username ?? 'angular'
    }/${repo}/contributors`;
    return this.http.get<IContributor[]>(url);
  }
}
