import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'sign-in',
      component: SignInComponent,
      title: 'Sign in'
    },
    {
      path: 'sign-up',
      component: SignUpComponent,
      title: 'Sign up'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;