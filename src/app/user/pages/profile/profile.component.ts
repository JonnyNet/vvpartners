import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { UserGitHub } from 'app/shared';
import { UserStoreService } from 'app/user/services/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  myType = ChartType.Histogram;
  user$: Observable<UserGitHub | undefined>;

  constructor(
    private readonly store: UserStoreService,
    private readonly route: ActivatedRoute
  ) { 
    this.user$ = store.user$;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.store.findUser(id);
  }

  ngOnDestroy(): void {
    this.store.resetUserSelected();
  }
}
