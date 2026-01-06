# Md Mahmudul Hasan – Personal Portfolio (React + Vite)

A modern, responsive personal portfolio website built with **React (Vite)** and **Tailwind CSS**.
It showcases your latest projects with a portfolio grid, pagination, and a dedicated **Project Details** page.

## Live / Preview

- **Local dev**: https://mahmudulhasanprotfolio.netlify.app/

## Features

- **Modern UI**
  - Glassmorphism cards, smooth gradients, responsive layout
  - Custom theme colors via Tailwind (`primary`, `background-light`, `background-dark`)
  - Google Font: **Montserrat**

- **Single Page Navigation**
  - Sections on the home page: Social, About, Services, Projects, Skills, Contact

- **Portfolio Projects**
  - Project list loaded from an API using **Axios + TanStack React Query**
  - Pagination on the portfolio grid
  - “See More” navigates to a project details route (`/:id`)

- **Project Details Page**
  - Loads project details dynamically by id
  - Shows overview, description, tech/language badges, key features, packages used, and live demo link

- **Animations**
  - GSAP + ScrollTrigger animations for page sections and portfolio cards

- **Contact Form**
  - Email sending with **EmailJS**
  - Toast notifications via **react-hot-toast**

## Tech Stack

- **Frontend**
  - React (Vite)
  - React Router DOM
  - Tailwind CSS
  - TanStack React Query
  - Axios
  - GSAP + ScrollTrigger
  - EmailJS
  - react-hot-toast
  - react-icons

## Project Structure

```text
my-protfolio/
  public/
  src/
    pages/
      Home.jsx
      Portfolio.jsx
      ProjectDetails.jsx
      Contact.jsx
      ...
    router.jsx
    main.jsx
    index.css
  index.html
  tailwind.config.js
  vite.config.js
  package.json
```

## Getting Started (Local Setup)

### 1) Prerequisites

- Node.js **18+** recommended
- npm (comes with Node)

### 2) Install dependencies

```bash
npm install
```

### 3) Start the frontend

```bash
npm run dev
```

Vite will run the app on:

- http://localhost:5173

## API / Backend Requirement

This frontend expects a projects API running locally.

### Current API URLs in the code

- **All projects**: `https://protfolio-backend-jet.vercel.app/projects`
- **Single project**: `https://protfolio-backend-jet.vercel.app/projects/:id`

> If your backend runs on a different host/port, update the Axios URLs (recommended: move to a single config / env variable).

### Expected project shape (example)

```json
{
  "_id": "...",
  "title": "App Market – App Listing Platform",
  "shortDescription": "...",
  "category": "React Project",
  "description": "...",
  "projectOverview": "...",
  "image": "https://...",
  "liveDemo": "https://...",
  "technology": "React, Tailwind CSS",
  "language": "React JS, Tailwind CSS",
  "packagesUsed": {
    "Axios": "^1.13.2"
  },
  "keyFeatures": [
    "..."
  ]
}
```

## Environment Variables (Recommended)

### EmailJS

Your `Contact.jsx` currently contains EmailJS configuration directly in code.
For security and easier deployment, it’s recommended to move them into environment variables.

Example `.env` (Vite):

```bash
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxxx
```

### API Base URL (Recommended)

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Then use:

- `${import.meta.env.VITE_API_BASE_URL}/projects`
- `${import.meta.env.VITE_API_BASE_URL}/projects/${id}`

## Available Scripts

- `npm run dev`
  - Start Vite development server
- `npm run build`
  - Build production bundle into `dist/`
- `npm run preview`
  - Preview the production build locally

## Routing

- `/`
  - Home page (all sections)
- `/:id`
  - Project Details page (loads project by id)

## Deployment

This is a Vite SPA. Common hosting options:

- Netlify
- Vercel
- GitHub Pages (with SPA routing config)

### SPA Route Handling

Because the app uses client-side routing (`react-router-dom`), configure your host to rewrite all routes to `index.html`.

## Author

**Md Mahmudul Hasan**

- GitHub: https://github.com/md-mahmudu1-hasan
- LinkedIn: https://www.linkedin.com/in/md-mahmudul-hasan-85ba92366
