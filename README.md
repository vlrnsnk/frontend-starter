# Frontend Mentor - {{PROJECT_NAME}} solution

This is a solution to the [{{CHALLENGE_NAME}} on Frontend Mentor]({{CHALLENGE_URL}}).
Frontend Mentor challenges help improve frontend skills by building realistic UI components.

## 🚀 Using this template

### 1. Create a new project

Click **"Use this template"** on GitHub and create a new repository.

### 2. Update project metadata

#### In `package.json`

```json
"name": "{{PROJECT_NAME}}"
```

### 3. Update Vite base path (for GitHub Pages)

If using static base:

```js
base: "/{{REPO_NAME}}/",
```

If using dynamic config (recommended), no change needed.

### 4. Update README

Replace all placeholders:

- {{PROJECT_NAME}}
- {{CHALLENGE_NAME}}
- {{CHALLENGE_URL}}
- {{SOLUTION_URL}}
- {{LIVE_URL}}

### 5. Add preview image

Replace:

```
./preview.png
```

### 6. Update links

- Solution URL: {{SOLUTION_URL}}
- Live Site URL: {{LIVE_URL}}

### 7. Update dependencies (optional)

```bash
npx npm-check-updates -u
```

### 8. Update docs

Put design files and style guide in docs directory.

### 9. Update favicons

Upload favicons to public directory (realfavicongenerator.net is recommended).
Create og-image.png after the project is ready for ease of sharing.

### 9. Enable GitHub Pages deploy

After creating repo: Settings → Pages → Source → GitHub Actions.

## Table of contents

- [Overview](#overview)
  - [Preview](#screenshot)
  - [Links](#links)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Setup](#setup)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
  - [Linting](#linting)
- [Deployment](#deployment)
- [Performance](#performance)
- [Author](#author)
- [Notes](#notes)

## Overview

### The challenge

Users should be able to:

- {{CHALLENGE_REQUIREMENT_1}}
- {{CHALLENGE_REQUIREMENT_2}}

### Preview

![](./preview.png)

### Links

- Solution URL: [GitHub Repo]({{SOLUTION_URL}})
- Live Site URL: [Live Site]({{LIVE_URL}})

## Features

- Responsive layout (mobile-first)
- Accessible interactive states (hover + focus-visible)
- SCSS modular architecture
- CSS property ordering enforced via Stylelint
- Optimized build with Vite
- GitHub Pages deployment via GitHub Actions

## My process

### Built with

- Semantic HTML5 markup
- SCSS (modular architecture: abstracts, base, components, layout)
- CSS custom properties (design tokens via SCSS variables)
- Flexbox / Grid
- Mobile-first workflow
- Vite
- Stylelint (code quality + property ordering)
- HTML validation
- Husky (pre-commit hooks)

### What I learned

- {{LEARNING_1}}
- {{LEARNING_2}}
- {{LEARNING_3}}

Example:

```scss
@include abstracts.transition(background-color, color);
```

## Setup

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

This project uses Stylelint + EditorConfig + Husky pre-commit hooks
to ensure consistent code formatting before commits.

### Fix SCSS issues:

```bash
npm run lint:fix
```

## Deployment

Project is built with Vite and deployed to GitHub Pages using GitHub Actions.

## Performance

Lighthouse score (example):

- Performance: {{PERF_SCORE}}
- Accessibility: {{ACCESSIBILITY_SCORE}}
- Best Practices: {{BEST_PRACTICES_SCORE}}
- SEO: {{SEO_SCORE}}

## Author

- Website: https://vlrnsnk.com
- Frontend Mentor: https://www.frontendmentor.io/profile/vlrnsnk
- GitHub: https://github.com/vlrnsnk

## Notes

- Focus on accessibility (semantic HTML, focus-visible)
- Modular SCSS architecture using @use
- Consistent styling via Stylelint rules
- Optimized build pipeline with Vite
