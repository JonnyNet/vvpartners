import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared';
import { UserStoreService } from 'app/user/services/user-store.service';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [BrowserAnimationsModule, SharedModule, RouterTestingModule],
      providers: [
        UserStoreService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    component.value = 'doublevpartners';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send to search results', () => {
    const spyon = jest.spyOn(component.valueChanges, 'emit');
    component.search.setValue('test1');
    component.searchUsers();
    expect(spyon).toHaveBeenCalledTimes(1);
  });
});
