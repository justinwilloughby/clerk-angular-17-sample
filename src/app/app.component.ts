import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClerkService } from 'ngx-clerk';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    RouterModule,
    HeaderComponent
  ],
  template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private _clerk: ClerkService,
    private auth: AuthService
  ) {
    this._clerk.__init({
      publishableKey: environment.clerk.publishableKey,
      signInUrl: environment.clerk.signInUrl,
      signUpUrl: environment.clerk.signUpUrl,
    });
  }
}