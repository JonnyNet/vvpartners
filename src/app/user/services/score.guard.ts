import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ErrorService } from 'app/shared/services/error.service';
import { Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {

  constructor(
    private readonly store: UserStoreService,
    private readonly error: ErrorService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let validator = true;
    if (this.store.user) {
      // validator = this.store.user.score <= 30.0;
    }

    if (!validator) {
      this.error.chageStateAlert({
        type: 'warning',
        title: 'Score!',
         message: 'This user does not have enough score to show the profile',
      });
    }

    return validator;
  }

}
