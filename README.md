# Mango
Mango was developed by Mario Martin as a take home coding challenge. Mangos' purpose is to provide metric logging and reporting services that consumes and sums metrics by time window for the most recent hour via an API interface. It implements two main APIs defined below.

## POST metric
Request
```
POST ​/metric/​{key} {
    "value"​: ​30
} ​
```
Response (200)
```
{}
```

## GET metric sum
Returns the sum of all metrics reported for this key over the past hour.
Request
```
GET ​/metric/​{key}/sum
```
Response (200)
```
{
"value": ​400
}
```

## Development
Development requires familiarity with the file structure and a few terminal commands. Follow the step by step directions below to get started with development.  See the file structure below to become familiar with the repository.

### 1. Clone the repo
Clone using ssh:
```
git clone git@github.com:MediaByte/mango.git
```
or https:
```
git clone https://github.com/MediaByte/mango.git
```

### 2. Install dependencies
```sh
$ cd mango
```
```sh
$ npm run build:develop
```

### Files and Folder structure
```
.
|-- __TESTS__
|   |-- logEvent.controller.test.js
|   |-- server.test.js
|
|-- .circleci
|   |-- config.yml
|
|-- src
|   |-- controllers
|       |-- logEvent.controller.js
|
|   |-- modules
|       |-- App.module.js
|       |-- Database.module.js
|
|   |-- routes
|       |-- rest.api.routes.js
|
|       |-- server.ts
|
|-- .babelrc
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- pg.env
|-- README.md
```

## Tests
Mango is using Jest for unit tests and supertest for integration tests. Our test suite is fully automated to test API controllers, endpoints and database functions.  To run tests enter the following command in your terminal:
```
npm test
```

## Author
* **Mario Martin** - *Author* - [MediaByte](https://github.com/MediaByte)


