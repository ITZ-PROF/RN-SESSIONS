# RN Assignment 01

**Name:** Micheal Gyebi

## Question 1: Explain the Importance of the node_modules Folder

The `node_modules` folder contains the packages and libraries installed in a project.

It is important because:
- It stores the packages the project needs to run.
- It allows us to use existing libraries instead of writing everything ourselves.
- It contains other packages required by the main packages.

We normally do not upload this folder to GitHub because we can install the packages again using `npm install`.

## Question 2: Explain the Difference Between package.json and package-lock.json

**package.json**

The `package.json` file contains information about the project, such as its name, dependencies, and scripts used to run commands.

**package-lock.json**

The `package-lock.json` file records the exact versions of the installed packages and their dependencies. It helps ensure that the same package versions are installed on different computers.

## Question 3: Explain the Difference Between Dependencies and DevDependencies

**Dependencies**

Dependencies are packages that an application needs for its normal operation. Examples in my Expo project are `expo`, `react`, and `react-native`.

**DevDependencies**

DevDependencies are packages mainly used to help developers build, test, and check their code. Examples include testing tools such as Jest and code-checking tools such as ESLint.