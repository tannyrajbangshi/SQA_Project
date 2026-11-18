
# Demo Web Shop Automation & API Testing

## Project Overview

This project automates the Demo Web Shop website using JavaScript and Playwright.

It also performs API testing using Postman and Newman.

## Technology Stack

- JavaScript
- Node.js
- Playwright
- Page Object Model (POM)
- Postman
- Newman
- Allure Report
- Git and GitHub

## Project Structure

- `pages/` - Page Object classes
- `tests/` - UI automation test cases
- `test-data/` - Dynamic test data
- `api-tests/` - Postman collection
- `allure-results/` - Allure results
- `allure-report/` - Allure report
- `playwright-report/` - HTML report

## Installation

Clone the repository:

```bash
git clone https://github.com/tannyrajbangshi/SQA_Project.git
```

Navigate to the project:

```bash
cd Automation_SQA_Project
```

Install dependencies:

```bash
npm install
```

Install browser:

```bash
npx playwright install chromium
```

## UI Test Execution

Run Q1:

```bash
npm run test:q1
```

Run Q2:

```bash
npm run test:q2
```

Run Q3:

```bash
npm run test:q3
```

Run all UI tests:

```bash
npm run test:ui
```

## API Test Execution

Run API collection:

```bash
npm run test:api
```

## Run Complete Project

```bash
npm run test:all
```

## Allure Report

Generate report:

```bash
npm run report:allure
```

Open report:

```bash
npm run report:open
```

## Test Scenarios

- Q1: Invalid Login
- Q2: Register and Add Product to Cart
- Q3: Product Search to Order Confirmation
- API 1: GET All Users
- API 2: PUT Update User

## Reporting

Playwright HTML and Allure reports are generated for UI executions.

Newman HTML report is generated for API execution.

## Author

Tanny Rajbangshi

## Project Purpose

Academic SQA Automation Project
