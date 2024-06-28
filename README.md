# MyApp

<p align="justify">Web application in React 18+ using React Router, with TypeScript, Less and Webpack by Michel Taing.</p>

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText="Click to expand") -->
<details>
<summary>"Click to show/hide"</summary>

- [Set up, update and run the project](#Set-up-update-and-run-the-project)
- [Project](#Project)
  - [Structure](#Structure)
  - [Set up](#Set-up)
  - [Development](#Development)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Set up, update and run the project:

> [!NOTE]
>
> <p align="justify">Any user can set up the project from scratch and run the project locally by following the steps below. The project uses port 3000.</p>

1. <p align="justify">Use the command below with your username to clone the project:</p>

```
git clone git@github.com:username/MyFrontApp.git
```

2. Install <a align="justify" href="https://github.com/coreybutler/nvm-windows">nvm</a> (.exe file).

3. <p align="justify">Install node version with:</p>

```
nvm install lts
nvm use version
```

4. <p align="justify">Install packages:</p>

```
npm install
```

5. <p align="justify">Check updates:</p>

```
npm outdated
```

6. <p align="justify">update if necessary:</p>

```
npm update --save
```

7. <p align="justify">To run the project locally:</p>

```
npm start
```

## Project:

> [!NOTE]
>
> <p align="justify">The project's structure, set up and development are explained below.</p>

### Structure:

<p align="justify">The project has four folders at its root, one for vscode, one for node modules, one for the Webpack output and one for all React source code:</p>

- <p align="justify">".vscode" folder contains all VSCode-related files.</p>

- <p align="justify">"node_modules" folder contains all packages and modules, to clean this folder, you can delete it and use `npm install`.</p>

- <p align="justify">"output" folder contains the html file, the JavaScript script created by Webpack during compilation is also in this folder.</p>

- <p align="justify">"src" folder contains all code-related files.</p>

  - <p align="justify">"components" folder contains all components and subcomponents, the distinction between components and subcomponents is that subcomponents are reusable, whereas components are unique.</p>

    - <p align="justify">"subcomponents" folder contains all reusable subcomponent-related files.</p>

  - <p align="justify">"pages" folder contains all pages imports and exports.</p>

  - <p align="justify">"styles" folder contains all style-related files.</p>

  - <p align="justify">"tests" folder contains all test-related files.</p>

  - <p align="justify">"utils" folder contains all other needed files, including interfaces, types, contexts, and constants in my React project.</p>

    - <p align="justify">"constants" folder contains all constant-related files.</p>

    - <p align="justify">"contexts" folder contains all context-related files.</p>

    - <p align="justify">"dictionaries" folder contains all translation-related files.</p>

    - <p align="justify">"interfaces" folder contains all interface-related files.</p>

    - <p align="justify">"types" folder contains all types related-related files.</p>

- <p align="justify">"index.tsx" file serves as the entry point for the application.</p>

- <p align="justify">".eslintrc.json" file defines the ESLint configuration for the project.</p>

- <p align="justify">"package-lock.json" file is an automatically generated file created by npm. It serves as a detailed record of the exact versions of every installed package and its dependencies, including nested dependencies.</p>

- <p align="justify">"package.json" file serves as a central metadata file for Node.js projects, containing essential information.</p>

- <p align="justify">"tsconfig.json" file defines the TypeScript configuration for the project.</p>

- <p align="justify">"webpack.config.json" file defines the Webpack configuration for the project.</p>

### Set up:

<p align="justify">I embarked on this project after contemplating what I could accomplish independently to showcase my skills. Consequently, this project is built with seemingly unnecessary rigor and processes to demonstrate my experience. A developer's role involves more than just writing lines of code.</p>

<p align="justify">I started the project on February 21st, 2024, by initializing a Node.js project. Afterward, I installed Webpack along with Babel modules and various loaders. Initially, I choose Webpack for client-side rendering (CSR) since it's a small project that doesn't require server-side rendering (SSR) and I planned to develop complex animations, custom UI components and maybe an API using a language other than JavaScript. I didn't use a framework like Next.js for this project because I wanted to learn and understand every detail about React, TypeScript and JavaScript, thus furthering my comprehension instead of relying too heavily on external built-in tools. I would still recommend using a framework that meets your needs to start a project in most cases, though. Subsequently, I set up TypeScript for the project in ESNext. The "jsx" setting was adjusted to "react-jsx", and "jsxImportSource" was set to "react". This adjustment was made because, starting from React 17, importing React is no longer mandatory in simple JSX files. I also set "moduleResolution" to "bundler" as I am using Webpack. Later, I added a .vscode folder to recommend extensions and enforce workspace settings, while also adding an ESLint configuration with Prettier.</p>

<p align="justify">The project uses a Webpack configuration. Webpack builds the project, while Babel and other loaders preprocess the files, transforming them into JavaScript for Webpack. Webpack then generates a script that is used in index.html and located in the output folder. The project is configured to use port 3000, which can be modified within the webpack.config.js file. I didn't add any polyfill as this is a small project and doesn't aim to reach a wide range of people.</p>

### Development:

<p align="justify">I started by creating a basic application with Home, About, and Error pages. Afterwards, I incorporated a header and implemented language, theme and screen size (Desktop/Mobile) settings with React contexts, media queries and cookies. To style components, I decided to use Less to define variables and mixins. Next, I defined various constants, interfaces and types for TypeScript and proceeded to create components, such as the menu component, and custom hooks for my needs.</p>
