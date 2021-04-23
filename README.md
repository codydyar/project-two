# Galvanize Auto
Project 2 by: \
C.D. https://github.com/codydyar \
A.Y. https://github.com/Amin-SDI \
A.D. https://github.com/SmoothE21 \
J.J. https://github.com/jdjfbnc6626 \

## Overview
- A car dealership application for both buyers and dealers. Buyers are welcomed to a search function that initially lets them select their make and model. Then they can filter their results by year, color, type, max price, mileage, and vehicle condition. Their filtered search is displayed in easy to read cards for every vehicle matching their choices.

- Dealers can access a concealed endpoint to add new cars to the lot using a fillable form.

## Description
- The application implements a React front-end communicating to an Express back-end serving a Postgres database using Knex middleware.

## Installation
- Clone this complete repository, and npm install the front-end React project and back-end Express project in their respective folders. The Express folder includes seed data to send to a Postgres database, which you implement as a Docker container from https://hub.docker.com/_/postgres

## Usage
- Once installed, you can interact with the development environments at React port 3000 and and Express port 3001. The buyer and dealer features of the application are immediately available after seeding. Both the React and Express projects are component architectures. You can extend React features in the "components" folder and Express endpoints in the app.js file and "routes" folder.