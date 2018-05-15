
# VivaFront

  
Build with angular version 6
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy

This project use Docker to deploy the app:

The first step is create an image from our Dockerfile:
$ docker build -t viva-front:prod .

Test if it works:

docker run -p 80:80 viva-front:prod