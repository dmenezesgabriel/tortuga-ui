# Vbc UI

Built on top of rock solid frameworks as a turtle 🐢 shell!

- [VueJS](https://vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [ChartJS](https://www.chartjs.org/)

With some spice 🌶️ to improve code maintainability:

- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

On a nice environment 🏖️:

- [NodeJS](https://nodejs.org/en/)

Welcome, and feel free to contribute!

## Development

### NPM link

This will sync the changes between this package and a test project.

1. In the root of this project use the command `npm link`.
2. Create another vue project with `npm init vue@latest`.
3. Enter in the new project and use the command `npm link vbc-ui`.
4. You can then use the package as the following:

```vue
<script setup>
/**
 * App.vue
 */

// Import a component
import { TextContent } from "vbc-ui";
// Import general style sheet (containing customized bootstrap)
import "vbc-ui/dist/style.css";
</script>

<template>
  <main>
    <div class="container border border-secondary">
      <div class="row">
        <div class="col-6 text-center">
          <TextContent type="h2">Hello, World</TextContent>
        </div>
        <div class="col-6 text-center">
          <TextContent type="h2">Hello, My Friend!</TextContent>
        </div>
      </div>
    </div>
  </main>
</template>
```

### NPM pack

This will create a `.tgz` file that can be installed locally.

1. In the root of this project use the command `npm pack`.
2. Install the package in the desired project `npm install <path>/vbc-ui-0.0.0.tgz`.
