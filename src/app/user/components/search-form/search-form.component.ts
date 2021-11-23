import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { UserStoreService } from '../../services/user-store.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() value = '';
  @Input() inLine = false;
  @Output() valueChanges = new EventEmitter();
  filteredOptions$!: Observable<string[]>;
  search!: FormControl;

  constructor(private readonly store: UserStoreService) {
    this.filteredOptions$ = store.userNames$;
  }

  ngOnInit(): void {
    this.search = new FormControl('', [Validators.minLength(4), Validators.required, this.doublevPartnersValidation])
    if (this.value) {
      this.search.setValue(this.value);
    }
    this.store.autocompleteUser(this.search.valueChanges)
  }

  doublevPartnersValidation(control: FormControl): ValidationErrors | null {
    const value = control.value.toLowerCase();
    return !value.includes('doublevpartners') ? null : { doublevpartners: true };
  }

  searchUsers() {
    this.valueChanges.emit(this.search.value);
  }
}
