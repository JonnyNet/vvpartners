import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLS } from './constans/urls';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchDetailsComponent } from './pages/search-details/search-details.component';
import { SearchComponent } from './pages/search/search.component';
import { ScoreGuard } from './services/score.guard';

const routes: Routes = [
  {
    path: URLS.HOME.PATH,
    component: SearchComponent,
  },
  {
    path: URLS.SEARCH_DETAILS.PATH,
    component: SearchDetailsComponent,
  },
  {
    path: URLS.USER_DETAIL.PATH,
    component: ProfileComponent,
    canActivate: [ScoreGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
