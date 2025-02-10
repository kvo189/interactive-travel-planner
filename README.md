# InteractiveTravelPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.7.

## Objective:
* Create a simple travel itinerary planner where users can:
  * Fetch destinations from a mock API and display them.
  * Add a destination with a date.
  * Remove a destination from the list.
  * Filter destinations by name.
  * Sort destinations by date.

## Requirements:
	•	Use Angular to build the UI.
	•	Fetch mock travel destinations from an API (simulated with setTimeout).
	•	Use an input field and a button to add destinations.
	•	Display destinations in a list with delete buttons.
	•	Implement a filter feature to search for a destination by name.
	•	Add a sort button to arrange destinations by date (ascending/descending).
	•	Keep everything client-side (no backend needed).

## Mock API Data (Simulated Response)
The API should return an array of destinations like this:
```
[
  { id: 1, name: "Paris", date: "2024-06-15" },
  { id: 2, name: "Tokyo", date: "2024-07-20" },
  { id: 3, name: "New York", date: "2024-05-10" }
]
```

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
