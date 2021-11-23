import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { USER, USER2 } from 'app/shared';
import { of } from 'rxjs';
import { GithubService } from './github.service';

import { UserStoreService } from './user-store.service';

describe('UserstoreService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: GithubService,
          useValue: {
            searchUsersThatContain() {
              return of([USER]);
            },
            findUser() {
              return Promise.resolve({
                ok: true,
                json: () => USER,
              })
            }
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          }
        },
      ]
    }
    );
    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return name list', done => {
    service.autocompleteUser(of('test'));
    service.userNames$.subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should return user list', done => {
    service.searchTextByInput('test');
    service.users$.subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should return user list data', done => {
    service.searchTextByInput('test');
    service.usersChart$.subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should return user', done => {
    service.findUser('test');
    service.user$.subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should select user', done => {
    service.selectUser(USER2 as any);
    service.user$.subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should reset user', done => {
    service.resetUserSelected();
    service.user$.subscribe(res => {
      expect(res).toBeFalsy();
      done();
    });
  });

  it('should navigate', () => {
    const router = TestBed.inject(Router);
    service.navigateToSearchDetails('test');
    expect(router.navigate).toBeCalledTimes(1);
  });
});
