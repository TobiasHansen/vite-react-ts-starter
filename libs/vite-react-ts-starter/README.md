# ⚡ A personal, opinionated version of a vite-react-ts-starter

A base template using Vite + React + Typescript + Firebase Auth + React Router + Mantine

## Motivation

Improve setup time for new project by getting a project base out of the box with the following libraries

- Vite
- React
- Typescript
- Mantine
- React Router
- Firebase Auth
- Code formatting
  - ESLint
  - Prettier
  - Husky (pre-commit hook)

## Set up

```shell
npx degit tobiashansen/vite-react-ts-firebaseAuth-starter
npm install

mv .env.local.example .env.local
```

### Firebase Auth

- Create a Firebase project
- Enable webapp for the Firebase project
- Copy config values into `.env.locel`
- Enable GoogleAuth for the Firebase project
