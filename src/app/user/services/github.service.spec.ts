import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { USER } from 'app/shared';
import { of } from 'rxjs';
import { GithubService } from './github.service';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => USER,
  }) as any);

describe('GithubService', () => {
  let service: GithubService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user list', done => {
    jest.spyOn(http, 'get').mockReturnValue(of({ items: [USER] }));
    service.searchUsersThatContain('JonnyNet').subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should return user', done => {
    service.findUser('JonnyNet').then((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });
});
