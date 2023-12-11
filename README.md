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
- [x] Tailwind CSS implementation
- [x] Custom fonts
- [x] Responsive design

## Execution on local machine

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
