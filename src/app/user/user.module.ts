import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchDetailsComponent } from './pages/search-details/search-details.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SharedModule } from 'app/shared';

@NgModule({
  declarations: [
    SearchComponent,
    ProfileComponent,
    SearchDetailsComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
})
export class UserModule { }
