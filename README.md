# 🍿Movie Search

## Table of Contents

- [About](#about)
  - [Description](#description)
  - [Features](#features)
- [Execution on local machine](#execution-on-local-machine)
  - [Requirements](#requirements)
  - [Steps](#steps)
- [CHANGELOG](#changelog)
- [LICENSE](#license)

## About

> [!IMPORTANT]
> This project was created with [React](https://react.dev/) and deployed with [AWS Amplify](https://aws.amazon.com/amplify/).

### Description

This is a movie search app that uses the [OMDb API](https://www.omdbapi.com/) to search for movies and display the results.

### Features

- [x] TypeScript support
  - With [ESLint](https://eslint.org/) integration for code linting
- [x] Tailwind CSS implementation
  - With [PostCSS](https://postcss.org/) integration
  - Complemented with [NextUI](https://nextui.org/)
- [x] CI/CD pipeline
  - With [GitHub Actions](./.github/workflows/QA.yml) for Quality Assurance and [AWS Amplify](https://aws.amazon.com/amplify/) for continuous deployment.
- [x] Custom fonts and dark mode
  - To improve the user experience
- [x] Responsive design
  - To have Desktop and Mobile support

## Execution on local machine

> [!TIP]
> If you are using [Visual Studio Code](https://code.visualstudio.com/) you can use the [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension to see the code comments in a better way.
### Requirements

- [Node.js](https://nodejs.org/en/)
- API token from [OMDb API](https://www.omdbapi.com/)
- [Git](https://git-scm.com/) (optional)

### Steps

1. Clone the repository using git or download the zip file.

```bash
git clone https://github.com/ErickDevv/MovieSearch
```

2. Install the dependencies.

```bash
npm install
```

3. Create a `.env.local` file in the root directory of the project and add the following environment variables:

- `VITE_API_KEY` - Your API token from [OMDb API](https://www.omdbapi.com/)

```bash
VITE_API_KEY=
```

4. Run the development server.

```bash
npm run dev
```

## CHANGELOG

See the [CHANGELOG](CHANGELOG.md) file for details about the changes made in each version of the project.

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
