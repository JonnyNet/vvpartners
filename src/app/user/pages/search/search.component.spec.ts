import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStoreService } from 'app/user/services/user-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchFormComponent } from 'app/user/components/search-form/search-form.component';
import { SharedModule } from 'app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchFormComponent],
      imports: [
        BrowserAnimationsModule, 
        HttpClientTestingModule, 
        RouterTestingModule, 
        SharedModule,
      ],
      providers: [
        UserStoreService,
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate with value as parameter', () => {
    const router = TestBed.inject(Router);
    const spyon = jest.spyOn(router, 'navigate');
    component.valueChanges('test');
    expect(spyon).toHaveBeenCalledTimes(1);
  });
});
