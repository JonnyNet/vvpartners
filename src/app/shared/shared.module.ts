import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { GoogleChartsModule } from 'angular-google-charts';

const modules = [
  CommonModule,
  FontAwesomeModule,
  HttpClientModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  GoogleChartsModule,
];

const components = [
  HeaderComponent,
  AlertComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faStackOverflow, faGithub, faFacebook);
  }
}
