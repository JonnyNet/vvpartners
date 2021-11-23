import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule, USER } from 'app/shared';
import { GithubService } from 'app/user/services/github.service';
import { UserStoreService } from 'app/user/services/user-store.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        UserStoreService,
        {
          provide: GithubService,
          useValue: {
            findUser(text: string) {
              return Promise.resolve({
                ok: true,
                json: () => USER,
              });
            }
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
