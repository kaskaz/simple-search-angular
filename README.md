# SimpleSearchApp

This application has 4 components, 1 parent and 3 childs:
* places (parent) - connects the 3 child components;
* place-list - prints a list of places (input) and emits an event of a selected place;
* place-detail - prints the details of a place (input);
* place-search - enables user input to filter places (by name) and emits an event of a search update

Also, this application has a custom pipe to filter places by name. It receives a list of places and a string (search pattern) as inputs.

The application was created based on the _Tour of Heroes App_.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

