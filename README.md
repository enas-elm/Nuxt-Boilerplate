# Boilerplate

This boilerplate is using :

- [ESLint](#lint)
- [Tailwind](#style)
- [Hero-Icons](#icons)
- [Prettier](#formatter)
- [Babel](#compiler)
- [Jest](#test)
- [Husky](#compiler)
- [Storybook](#storybook)
- [Nuxt](#git-management)

In the "Pokedex" branch you will find an exemple of what has been realised with this boilerplate

## Lint

[ESLint](https://eslint.org/docs/latest/use/getting-started)

Configure the rules in the **.eslintrc.json** file

Run `npm run lint` to launch test

## Style

[Tailwind](https://tailwindcss.com/docs/installation)

Configure your tailwind classes in **tailwind.config.js** and modify you style in **./assets/css/main.css** and **./assets/css/tailwind.css**

## Icons

[HerIcons](https://vue-hero-icons.netlify.app/)

Check the website to view all the icons -> [https://vue-hero-icons.netlify.app/](https://vue-hero-icons.netlify.app/)

**USE :** Import the Icons as Components

```js
<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

export default {
    name: 'Home',
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
};
</script>
```

```html
<ChevronRightIcon class="w-20 text-lightYellow" />
```

## Formatter

[Prettier](https://prettier.io/docs/en/install)

Checks your js, css and vue files

You can configure prettier in the .prettierrc file

Run `npm run format`

## Compiler

[Babel](https://babeljs.io/setup#installation)

This will run automatic on build

Run `npm run build`

## Test

[Jest](<[https://babeljs.io/setup#installation](https://jestjs.io/docs/getting-started)>)

You can change the test in the ****test**** folder

Run `npm run test`

## Git management

[Husky](https://typicode.github.io/husky/getting-started.html)

Right before your commit, husky wil launch your test to check if youre ode is ready to be pushed

## Storybook

[Storybook](https://storybook.nuxtjs.org/)

Configure your stories in the **story** folder

Run `npm run storybook`

# Nuxt

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
