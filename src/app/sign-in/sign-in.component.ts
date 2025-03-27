import { Component } from '@angular/core';
import { ClerkSignInComponent } from 'ngx-clerk';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ClerkSignInComponent],
  template: '<div class="sign-in-container"><clerk-sign-in></clerk-sign-in></div>',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
