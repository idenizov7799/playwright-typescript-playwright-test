<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li><a href="#built-with">Built With</a>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#reports">Reports</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Records videos for Test Cases.
- Records the test script and every action on the target page is turned into generated script.
- Generates trace file, which gives in-depth details of Test Case execution.
- Execution of test case is faster when compared with other competitive framework in market.
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
- It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.
- It has ability to produce and visually compare screenshots.
- To slow down execution slowMo option is available.
- Supports 'download' event monitoring, so there is no need for user to actually wait for downloads to finish.
- Supports Serial and Parallel execution.
- Allure Reports are generated after execution with an option to capture screenshot/video/trace file on failure.
- Nonetheless Support from Microsoft so FREQUENT RELEASES and turn arounf time for any queries is 48 hours.

Bonus:

- Supports API testing using 'supertest' module.
- Supports PostgresSQL using 'pg' module.
- Supports Excel File Read/Write using 'excel-js' module.

### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Supertest](https://github.com/visionmedia/supertest)
- [node-postgres](https://github.com/brianc/node-postgres)
- [excel-js](https://github.com/exceljs/exceljs)
- [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.

- allure commandline : Install allure command line for generating Allure Reports using
  ```sh
  npm install -g allure-commandline
  ```

### Installation

1. Clone the repo using below URL

```sh
https://github.com/akshayp7/playwright-typescipt-playwright-test.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in "playwright.config.ts".
2. For execution entire test suite on all available browsers simultaneously execute:
   
```JS
npm run test
```

3. For executing single test case on Chrome browser execute the below command, ypu can change the browser for execution e.g. if you want to run test cases on Firefox, you can change "--project=Firefox" against "test:single" in "package.json", just make sure the browser name given matches the name given in "playwright.config.ts".

```JS
npm run test:single
```

4. For executing test cases in parallel, provide a suitable tag "@SmokeTest" at the start of your test case name, then in "package.json" against "test:parallel" give the tag value and execute :

```JS
npm run test:parallel
```

5. For executing test cases in sequence, provide a suitable tag "@SmokeTest" at the start of your test case name, then in "package.json" against "test:serial" give the tag value and execute, "workers" parameter correspond to test cases you want to execute simultaneously e.g. "--workers=3", executes 3 test cases simultaneously :

```JS
npm run test:serial
```

6. For executing API test cases :

```JS
npm run test:api
```