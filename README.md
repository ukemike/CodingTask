# CodingTask For Sunsniffer
This repository contains code for a backend engineer role. It contains two endpoints /create-vacine and /vacine-summary that performs various functions.

# Tech Stack
Server: Node, Express, TypeScript

Database: Mongodb.

Testing: Mocha and Chai

# Authors
Uke Michael

## Run Locally

Clone the project

```
git clone https://github.com/ukemike/CodingTask.git
```

Install dependencies

```
npm install
```

Create dist folder

```
npm run build
```

Run dev script

```
npm run dev
```

## Running Tests

To run tests, run the following command

```
npm run dev
```

## Endpoints Available

```
http://localhost:5000/vacine-summary?c=AT&dateFrom=2020-W10&dateTo=2020-W53&range=5
http://localhost:5000/create-vacine
```

## Addtional feature 
Rate limiter was implemented to allow 5 call per minute