# Feathery

This project is an exercise in which we will create a content-hosting platform emplyoing the MERN stack.

This repository is the front-end of the application and it runs on React, employing TypeScript for the code dialect and Redux for its dataflow, adopting the Ducks pattern.

### Environment needs

```
{
  "node": "^12.12.0",
  "yarn": "^1.91.1"
}
```

## Routines & Scripts

### Quickstart

```
git fetch
git checkout development
yarn
yarn start
```

### `yarn start`

To run the application in development mode.

### `yarn test`

To run the test suites.

### `yarn build`

To consolidate a build for a CI deployment.

# Architecture

When propicious, we'll dive in deeper detail here.

```
project
│ .eslintrc
│ .prettierrc
│ .gitignore
│ README.md
│ tsconfig.json
│ package.json
│
└─public/
│   favicon.ico
│   index.html
│   logo192.png
│   logo512.png
│   manifest.json
│   robots.txt
│
└─src/
│  └── app
│  │  │ index.ts
│  │  │ App.tsx
│  │  │ App.test.tsx
│  │  │ locale.json
│  │  │ styles.ts
│  └── assets/
│  │  │ index.ts
│  │  │ fonts/
│  │  │ images/
│  └── components/
│  │  │ index.ts
│  │  │ Component/
│  │  │   Component.tsx
│  │  │   Component.test.tsx
│  │  │   locale.json
│  │  │   styles.ts
│  └── interfaces/
│  │     services/
│  └── locale/
│  │     index.ts
│  └── routes/
│  │  │ index.ts
│  │  │ admins.tsx
│  │  │ commons.tsx
│  │  │ public.tsx
│  └── services/
│  │  │ index.ts
│  │  │ api.ts
│  │  │ TestService.ts
│  └── shared/
│  │  │ index.ts
│  │  │ helpers.ts
│  │  │ hooks.ts
│  └── shared/
│  │  │ index.ts
│  │  │ ducks/
│  └── styles/
│  │  │ index.ts
│  │  │ standards.css
│  └── tests/
│  │  │ index.ts
│  └── themes/
│  │  │ index.ts
│  │  │ Dark/
│  │  │  └── index.ts
│  │  │  │   Dark.ts
│  │  │  │   locale.json
│  │  │ Light/
│  │  │  └── index.ts
│  │  │  │   Light.ts
│  │  │  │   locale.json
│  │  │ index.ts
│  │  │ standards.css
│  │  │ Light/
│  └── views/
│  │  │ Main/
│  │  │  └── Main.tsx
│  │  │  │   styles.ts
│  │  │  │   locale.json
│  │  │ About/
│  │  │  └── About.tsx
│  │  │  │   styles.ts
│  │  │  │   locale.json
```
