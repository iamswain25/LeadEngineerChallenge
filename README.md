# AvoMD Frontend Coding Challenge

Welcome to the AvoMD frontend coding case interview! Please read the following instructions carefully.

**Your goal is to build a rudimentary application which enables a healthcare administrator to view and manage patient data.**

# Contents

-   [Business requirement](#business-requirement)
-   [Use cases](#use-cases)
-   [Evaluation criteria](#evaluation-criteria)
    -   [Technology requirements](#technology-requirements)
    -   [Code requirements](Criteria.md#must-have)
-   [How to submit](#how-to-submit)
-   [How to run API server](#how-to-run-api-server)
-   [Time limit](#time-limit)

# Business Requirement

The business has specified we need to build a portal to better manage our patient data across physicians and clinics. The goal is for the user to check the status of patients at a glance. This allows our healthcare administrators to take faster decisions and help provide visibility into the state of their patients.

Providing information to the healthcare administrator increases transparency and reduces communication issues.

# Use cases

- The user shall be able to:
  - See all patients in pages of 20 elements per page
  - Search by patient id or SSN
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - View the patient information on a separate patient detail page including lists of diagnosis

The interactions should not refresh the page.

# Evaluation criteria

## Technology requirements

**React** and **JavaScript** are required requirements. Apart from this, you can use any libraries, task runners and build processors. ES6 and TypeScript are highly encouraged.

## Code requirements

The full criteria for evaluating the coding challenge can be found [here](./Criteria.md).

# How to submit

- Clone this repo.
- A RESTful API for `patients` is provided with the challenge. To run, follow: [How to run API server](#how-to-run-api-server)
- Complete your project as described above within your local repository.
- Make sure that there are scripts to start both the server and the client.
- Ensure everything you want to commit is committed before you bundle.
- Create a git bundle: `git bundle create your_name.bundle --all`
- Email the bundle file to your point of contact.

**In order to be fair to all candidates, please refrain from sharing your solution on public repository hosting services such as GitHub and Bitbucket.**

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn server or npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.

# Time limit

There is no hard time limit for this coding challenge. However, we believe that 2-3 hours is sufficient for the must-have parts of the application. While we appreciate all the effort put into the challenge, we also do not want to take up too much of your time. Our advice is to focus on making sure [that the application works properly and has some tests](Criteria.md#must-have) before moving on to secondary objectives. Happy coding!

All the best!
The AvoMD Recruiting Team
