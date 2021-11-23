import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule, USER } from 'app/shared';
import { SearchFormComponent } from 'app/user/components/search-form/search-form.component';
import { GithubService } from 'app/user/services/github.service';
import { UserStoreService } from 'app/user/services/user-store.service';
import { of } from 'rxjs';

import { SearchDetailsComponent } from './search-details.component';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDetailsComponent, SearchFormComponent],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
      providers: [
        UserStoreService,
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            get queryParams() {
              return of({ search: 'JonnyNet' })
            }
          }
        },
        {
          provide: GithubService,
          useValue: {
            searchUsersThatContain() {
              return of(USER);
            }
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsComponent);
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

  it('should navigate to user detail', () => {
    const router = TestBed.inject(Router);
    const spyon = jest.spyOn(router, 'navigate');
    component.selectUser(USER as any);
    expect(spyon).toHaveBeenCalledTimes(1);
  });
});
