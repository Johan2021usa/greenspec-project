# Greenspec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Running the project
This project requires the next technologies:
- Angular CLI: 17.3.12
- Node: 20.17.0
- Package Manager: npm 10.8.2

## Environment variables for email js:

This project sends emails using the email js library. Thus, it takes to crate an account in: https://www.emailjs.com 

Then create a email service there:

![alt text](/src/assets/images/other/image.png)
![alt text](/src/assets/images/other/02.png)

Connect a gmail account, copy the service ID, send test email to verify configuration and then click on create service:

![alt text](/src/assets/images/other/03.png)

Once is created, the service will appear giving you a service id which has to be place in a .env file:

![alt text](/src/assets/images/other/04.png)

Then go to the email templates to define the structure of the email that is going to be sent, which in this case was created based on the form structure: name, email, contact reason, message, please create the same structure shown bellow:

![alt text](/src/assets/images/other/05.png)
![alt text](/src/assets/images/other/06.png)
![alt text](/src/assets/images/other/07.png)
![alt text](/src/assets/images/other/08.png)

This gives you a template Id: 

![alt text](/src/assets/images/other/09.png)

Then go to Account and copy the public key:

![alt text](/src/assets/images/other/10.png)

Subsequently, Create a .env file in the root of the project and set the next variables with the previous credentials:

- SERVICE_KEY=set_your_Service_ID.

- TEMPLATE_KEY=set_your_template_ID

- PUBLIC_KEY=set_your_public_key

Once is that you can run the project with the next commands:

- npm install (install required dependencies)
- ng s --open

Thank you and I expect you enjoy it.
