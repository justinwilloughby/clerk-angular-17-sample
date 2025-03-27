import { Component } from '@angular/core';
import { ClerkSignUpComponent } from 'ngx-clerk';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ClerkSignUpComponent],
  template: '<div class="sign-up-container"><clerk-sign-up></clerk-sign-up></div>',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
