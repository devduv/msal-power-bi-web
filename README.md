# MSAL Power BI Web


I was guided by the following repository: https://github.com/tamani-coding/angular-msal-login-example

Use Angular MSAL Libary

Documentation can be found at: https://github.com/AzureAD/microsoft-authentication-library-for-js



[![Version](https://img.shields.io/badge/version-v.1.0-pink)]() [![Framework](https://img.shields.io/static/v1?label=Angular%20Framework&message=10.1.7&color=red)]() [![Node](https://img.shields.io/static/v1?label=Node&message=14.15.4&color=green)]() [![Chart JS](https://img.shields.io/static/v1?label=azure/msal-angular&message=2.0.0&color=yellow)]()

## Requirements.

- [Node 14.15.4](https://nodejs.org/es/download/) for cross-platform runtime environment.
- [Angular 10.7.1]() for develop web apps.
- An IDE to support us with imports, functions of each object and control of some code errors.

# Resume

The Microsoft Authentication Library enables both client-side and server-side JavaScript applications to authenticate users using Azure AD for work and school accounts (AAD).


### About Project
This project is a web system to login with a Microsfot account to the application created in the Microsfot Azure Portal.


### Registered Application in project

In app.module.ts set clientId and redirectUri
```ts
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'CLIENT-ID-OF-APPLICATION',
      redirectUri: 'URL-REDIRECT',
    },
  });
}

```

![MSAL Power BI Web](https://raw.githubusercontent.com/devduv/msal-power-bi-web/dev/src/assets/Captura.JPG)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
