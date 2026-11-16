# RN Assignment 01

**Name:** Micheal Gyebi

## Question 1: Explain the Importance of the node_modules Folder

The `node_modules` folder stores the libraries and packages installed in a JavaScript or React Native project.

Its importance includes:

1. **Stores packages:** It contains libraries required by the application.
2. **Provides functionality:** It allows developers to use existing tools and libraries instead of writing everything from scratch.
3. **Manages dependencies:** It stores packages that other packages need to function correctly.
4. **Supports development:** It provides the tools required to develop and run the application.

The folder is usually not uploaded to GitHub because its contents can be recreated by installing the dependencies listed in the project's package files.

## Question 2: Explain the Difference Between package.json and package-lock.json

The `package.json` and `package-lock.json` files help manage packages in a JavaScript project.

### package.json

The `package.json` file contains information about the project, including its name, version, dependencies, and npm scripts. It specifies the packages the project requires.

### package-lock.json

The `package-lock.json` file records the exact resolved versions of installed packages and their dependencies. It helps ensure that installations are consistent across different computers.

### Differences

| package.json | package-lock.json |
|---|---|
| Contains project information and configuration. | Records the resolved dependency versions. |
| Defines dependencies and devDependencies. | Records the dependency tree and exact package versions. |
| Contains npm scripts. | Helps reproduce consistent installations. |
| Can be edited to change scripts and dependencies. | Is generally updated automatically by npm. |

Both files should normally be committed to GitHub so that other developers can install the project's dependencies.

## Question 3: Explain the Difference Between Dependencies and DevDependencies

Dependencies and devDependencies are two categories of packages used in a JavaScript project.

### Dependencies

Dependencies are packages required for the application's normal functionality.

Examples in an Expo project include `expo`, `react`, and `react-native`.

They are listed under the `dependencies` section of `package.json`.

### DevDependencies

DevDependencies are packages mainly used during development, testing, code checking, and other development tasks.

Examples include testing tools such as Jest and code-quality tools such as ESLint, depending on the project.

They are listed under the `devDependencies` section of `package.json`.

### Differences

| Dependencies | DevDependencies |
|---|---|
| Support the application's normal functionality. | Support development and testing activities. |
| Listed under `dependencies`. | Listed under `devDependencies`. |
| Include packages needed by the application. | Include tools that help developers build and maintain the application. |
| Examples include Expo and React Native packages. | Examples include Jest and ESLint. |

**Conclusion:** Dependencies support the application's functionality, while devDependencies provide tools that help developers build, test, and maintain the project.