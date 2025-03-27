import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClerkUserButtonComponent, UserResource } from 'ngx-clerk';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ClerkUserButtonComponent
  ],
  template: `
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </a>
      <div class="user-buttons">
        <ng-container *ngIf="auth.isLoaded$ | async as isLoaded">
          <ng-container *ngIf="auth.isAuthenticated$ | async as isAuthenticated; else notAuthenticated">
            <p *ngIf="user?.firstName">Hi, {{ user?.firstName ?? 'there' }}</p>
            <clerk-user-button></clerk-user-button>
          </ng-container>
          <ng-template #notAuthenticated>
            <a [routerLink]="['/sign-in']">Sign in</a>
            <a [routerLink]="['/sign-up']">Sign up</a>
          </ng-template>
        </ng-container>
        <ng-template #loading>
          <span class="loading">Loading...</span>
        </ng-template>
      </div>
    </header>
  `,
  styles: [`
    .brand-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
      box-shadow: 0px 5px 25px var(--shadow-color);
    }
    
    .user-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .brand-logo {
      max-width: 100px;
    }
    
    .loading {
      color: #666;
      font-size: 14px;
    }
    
    a {
      text-decoration: none;
      color: #333;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    a:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class HeaderComponent implements OnDestroy {
  user: UserResource | null = null;
  private destroy$ = new Subject<void>();

  constructor(public auth: AuthService) {
    // Subscribe to user changes
    this.auth.user$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      this.user = user ?? null;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
} 