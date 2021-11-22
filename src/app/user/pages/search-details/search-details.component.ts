import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGitHub } from '@app/shared';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  search!: string;
  users$!: Observable<UserGitHub[]>;

  constructor(
    private readonly store: UserStoreService,
    private readonly route: ActivatedRoute,
  ) {
    this.users$ = store.users$;
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
    });
  }

  ngOnInit(): void {
    this.store.searchTextByInput(this.search);
  }

  valueChanges(text: string): void {
    this.store.navigateToSearchDetails(text);
    this.store.searchTextByInput(this.search);
  }

  selectUser(user: UserGitHub): void {
    this.store.selectUser(user);
  }
}
