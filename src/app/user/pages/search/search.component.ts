import { Component } from '@angular/core';
import { UserStoreService } from 'app/user/services/user-store.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private readonly store: UserStoreService) { }

  valueChanges(text: string): void {
    this.store.navigateToSearchDetails(text);
  }
}
