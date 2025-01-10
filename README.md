# Angular Handsontable Demo

## Project Overview

This project demonstrates a split-screen layout using Angular, featuring:
- A form (left side) for inputting data (Product Name, Sales, and Region).
- A Handsontable grid (right side) to display and manage data.

The project highlights:
-	Reactive forms for validation and submission.
-	Integration with Handsontable for an interactive grid.
-	Tailwind CSS for clean and responsive styling.


## Installation Instructions

### Prerequisites
-	Node.js (v18+ recommended)
-	npm (comes with Node.js)
- Angular CLI (v19+)

### Clone the Repository

### Install Dependencies
```bash
npm install
```

## Steps to Run the Project

### Start the Development Server
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```


### Functionality

The application features a split-screen interface with a form on the left and a Handsontable grid on the right.

The form allows users to input product data: Product Name, Sales, and Region. It validates inputs:
-	Product Name, Sales and Region must not be empty.
-	Sales must be numeric.

Upon submission, valid data is added as a new row to the grid, which dynamically updates in real-time. The grid displays this data alongside preloaded sample rows. Tailwind CSS is used to provide clean, consistent, and responsive styling.
