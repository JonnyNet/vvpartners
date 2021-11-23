import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, UserGitHub, UserStoreModel } from 'app/shared';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import { URLS } from '../constans/urls';
import { GithubService } from './github.service';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends Store<UserStoreModel> {

  readonly userNames$ = this.state$.pipe(map(x => x.userNames));
  readonly users$ = this.state$.pipe(map(x => x.users));
  readonly usersChart$ = this.state$.pipe(map(x => x.users));
  readonly user$ = this.state$.pipe(map(x => x.user));
  readonly user = this.state.user;

  constructor(
    private readonly gitHabService: GithubService,
    private readonly router: Router,
  ) {
    super({
      userNames: [],
      users: [],
      chart: [],
      user: undefined,
    });
  }

  autocompleteUser(text: Observable<string>): void {
    text.pipe(
      filter(value => value.length > 3),
      filter(value => value !== 'doublevpartners'), // validar en formulario.
      debounceTime(300),
      switchMap(value => this.gitHabService.searchUsersThatContain(value)),
      map((response: any) => response.map((x: any) => x.login)),
    ).subscribe((userNames: string[]) => {
      this.setState({
        ...this.state,
        userNames
      });
    });
  }

  searchTextByInput(text: string): void {
    this.gitHabService.searchUsersThatContain(text).subscribe((users: UserGitHub[]) => {
      const chart = users.map(x => [x.login, x.score]);
      console.log(chart);
      
      this.setState({
        ...this.state,
        userNames: [],
        users
      });
    });
  }

  findUser(userLogin: string): void{
    this.gitHabService.findUser(userLogin).then(response => {
      return response.json();      
    }).then((user: UserGitHub) => {
      this.setState({
        ...this.state,
        userNames: [],
        user,
      });
    });
  }

  navigateToSearchDetails(search: string) {
    this.router.navigate([URLS.SEARCH_DETAILS.FULLPATH], { queryParams: { search } });
  }

  selectUser(user: UserGitHub): void {
    this.setState({
      ...this.state,
      user,
    });
    this.router.navigate([URLS.USER_DETAIL.FULLPATH, user.login]);
  }

  resetUserSelected(): void {
    this.setState({
      ...this.state,
      user: undefined,
    });
  }
}

