import { Injectable } from '@angular/core';
import { ClerkService } from 'ngx-clerk';
import { BehaviorSubject, map, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loadedSubject = new BehaviorSubject<boolean>(false);
  private readonly authenticatedSubject = new BehaviorSubject<boolean>(false);

  readonly isLoaded$ = this.loadedSubject.asObservable();
  readonly isAuthenticated$ = this.authenticatedSubject.asObservable();
  readonly user$ = this.clerk.user$;

  constructor(private clerk: ClerkService) {
    this.clerk.clerk$.pipe(
      map(clerk => clerk.loaded)
    ).subscribe(loaded => {
      this.loadedSubject.next(loaded);
    });

    this.clerk.user$.pipe(
      map(user => user !== null && user !== undefined),
      distinctUntilChanged()
    ).subscribe(isAuthenticated => {
      this.authenticatedSubject.next(isAuthenticated);
    });
  }
} 