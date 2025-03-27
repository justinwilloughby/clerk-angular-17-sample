# Angular + Clerk Authentication Sample

This project demonstrates how to integrate Clerk authentication with an Angular application. It provides a simple reference implementation showing how to handle user authentication, and manage authentication state.

![Angular Clerk Authentication Sample](app.png)

## Features

- `<clerk-sign-in>` component for user sign-in
- `<clerk-sign-up>` component for user registration
- `<clerk-user-button>` component for user profile management

## Prerequisites

- Node, NPM, Angular CLI (ng)
- [Clerk account](https://clerk.com)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/justinwilloughby/clerk-angular-17-sample.git
cd clerk-angular-17-sample
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Clerk

1. Create a Clerk application in the [Clerk Dashboard](https://dashboard.clerk.com)
2. Get your Publishable Key
3. Update the key in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  clerk: {
    publishableKey: 'YOUR_CLERK_PUBLISHABLE_KEY', // Replace with your key
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
  }
};
```

### 4. Start the development server

```bash
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

## Project Structure

- `src/app/app.component.ts` - Main application component and Clerk initialization
- `src/app/services/auth.service.ts` - Central service for auth state management
- `src/app/sign-in/sign-in.copmonent.ts` - Mounts the clerk-sign-in component.
- `src/app/sign-up/sign-up.copmonent.ts` - Mounts the clerk-sign-up component.
- `src/app/components/header/header.component.ts` - Header with auth-aware navigation that mounts the clerk-user-profile component.

## Authentication Flow

1. The app initializes Clerk in `AppComponent`
2. Clerk UI components rendered for sign in, sign up, and user profile management
3. `AuthService` manages authentication state using Clerk's observables
4. UI components react to auth state changes via observables

## Key Concepts

### AuthService

The `AuthService` provides a clean abstraction over Clerk's authentication, exposing:

- `isAuthenticated$` - Observable boolean indicating auth state
- `isLoaded$` - Observable boolean indicating when Clerk has loaded
- `user$` - Observable with the current user information

### Reactive Authentication

The application uses RxJS observables to reactively update the UI when auth state changes.

## Additional Resources

- [Clerk Documentation](https://clerk.dev/docs)
- [Angular Documentation](https://angular.io/docs)
- [ngx-clerk Documentation](https://github.com/clerk/clerk-angular)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
