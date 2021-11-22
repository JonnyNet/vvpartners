import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGitHub } from '@app/shared';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private gitHub = environment.gitHub;

  constructor(private readonly http: HttpClient) { }

  searchUsersThatContain(text: string): Observable<UserGitHub[]> {
    return this.http.get(this.gitHub.searchUser + text).pipe(
      map((response: any) => response.items.slice(0, 10)),
    );
  }

  findUser(userLogin: string): Promise<any> {
    return fetch(this.gitHub.findUser + userLogin);
  }
}
