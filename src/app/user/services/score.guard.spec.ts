import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { faStickerMule } from '@fortawesome/free-brands-svg-icons';
import { USER, USER2 } from 'app/shared';
import { ErrorService } from 'app/shared/services/error.service';
import { of } from 'rxjs';
import { GithubService } from './github.service';

import { ScoreGuard } from './score.guard';
import { UserStoreService } from './user-store.service';

describe('ScoreGuard', () => {
  let guard: ScoreGuard;
  let store: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ErrorService,
        {
          provide: UserStoreService,
          useValue: {
            user: USER,
          }
        },
        {
          provide: GithubService,
          useValue: {
            findUser(_text: string) {
              return Promise.resolve({
                ok: true,
                json: () => USER,
              });
            }
          },
        },
      ]
    });
    guard = TestBed.inject(ScoreGuard);
    store = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not navigate', () => {
    expect(guard.canActivate(null as any, null as any)).toEqual(false);
  });
});

describe('ScoreGuard2', () => {
  let guard: ScoreGuard;
  let store: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ErrorService,
        {
          provide: UserStoreService,
          useValue: {
            user: USER2,
          }
        },
        {
          provide: GithubService,
          useValue: {
            findUser(_text: string) {
              return Promise.resolve({
                ok: true,
                json: () => USER,
              });
            }
          },
        },
      ]
    });
    guard = TestBed.inject(ScoreGuard);
    store = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate', () => {
    expect(guard.canActivate(null as any, null as any)).toEqual(true);
  });
});
