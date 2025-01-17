# Workshop Task 2: Refactoring CSS using Sass (SCSS)
## Objective
1. Refactor the repetitive CSS (`styles.css`) into SCSS (`styles.scss`).
2. Use variables, mixins, and nesting to improve maintainability.

## Prerequisites
- Install sass dependencies: `npm install`

## Instructions

1. Open `styles.css` and analyze the repetitive code.  
2. Open `styles.scss` and refactor the styles using:
   - Variables for padding, colors, etc.
   - Mixins for reusable logic.
   - Nesting for better organization (if needed).
   - Sass documentation: `https://sass-lang.com/guide/`
3. Save your changes and compile `styles.scss` into `output.css`
   using the npm script `npm run sass` 
   (this will run `sass --watch styles.scss output.css`) 
   - Note: this step is usually done by some bundler tool / framework, e.g. Vite
     or Webpack, either locally within the dev server or when bundling the
     application for production.
4. _For the pros (OPTIONAL):_ Create a
   [Partial](https://sass-lang.com/guide/#partials) storing the color values and use it in
   your `styles.scss` file (imagine you want to re-use the colors in the future).

**To verify your solution:** Delete `styles.css` and verify that the
   `index.html` is still rendered with
   the same style - for that you can run the VSCode Live Server (right click on
   `index.html` and select "Open with Live Server"). Hint: use the browser
   inspector to verify your styles are coming from the right stylesheet.