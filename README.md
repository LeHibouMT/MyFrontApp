# MyApp

<p align="justify">Web application in React 18+ using React Router, with TypeScript, Less and Webpack by Michel Taing.</p>

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText="Click to expand") -->
<details>
<summary>"Click to show/hide"</summary>

- [Set up, update and run the project](#Set-up-update-and-run-the-project)
- [Project](#Project)
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

### Set up:

<p align="justify">I embarked on this project after contemplating what I could accomplish independently to showcase my skills. Consequently, this project is built with seemingly unnecessary rigor and processes to demonstrate my experience. A developer's role involves more than just writing lines of code.</p>

<p align="justify">I started the project on February 21st, 2024, by initializing a Node.js project. Afterward, I installed Webpack along with Babel modules and various loaders. Initially, I choose Webpack for client-side rendering (CSR) since it's a small project that doesn't require server-side rendering (SSR) and I planned to develop complex animations, custom UI components and maybe an API using a language other than JavaScript. I didn't use a framework like Next.js for this project because I wanted to learn and understand every detail about React, TypeScript and JavaScript, thus furthering my comprehension instead of relying too heavily on external built-in tools. I would still recommend using a framework that meets your needs to start a project in most cases, though. Subsequently, I set up TypeScript for the project in ESNext. The "jsx" setting was adjusted to "react-jsx", and "jsxImportSource" was set to "react". This adjustment was made because, starting from React 17, importing React is no longer mandatory in simple JSX files. I also set "moduleResolution" to "bundler" as I am using Webpack. Later, I added a .vscode folder to recommend extensions and enforce workspace settings, while also adding an ESLint configuration with Prettier.</p>

<p align="justify">The project uses a Webpack configuration. Webpack builds the project, while Babel and other loaders preprocess the files, transforming them into JavaScript for Webpack. Webpack then generates a script that is used in index.html and located in the output folder. The project is configured to use port 3000, which can be modified within the webpack.config.js file. I didn't add any polyfill as this is a small project and doesn't aim to reach a wide range of people.</p>

### Development:

<p align="justify">I started by creating a basic application with Home, About, and Error pages. Afterwards, I incorporated a header and implemented language, theme and screen size (Desktop/Mobile) settings with React contexts, media queries and cookies. To style components, I decided to use Less to define variables and mixins. Next, I defined various constants, interfaces and types for TypeScript and proceeded to create components, such as the menu component, and custom hooks for my needs. Later, I added a mobile version of the navigation bar, and an animated button to open/close the menu of the mobile navigation bar.</p>
