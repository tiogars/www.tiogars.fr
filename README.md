# www.tiogars.fr

A React + TypeScript + Vite website built with pnpm, designed with Material-UI (MUI). This website displays cards to present various web projects with their name, description, URL, and GitHub repository.

## Features

- ⚡️ Built with Vite for fast development and optimized builds
- ⚛️ React 19 with TypeScript for type-safe development
- 🎨 Material-UI (MUI) for beautiful, responsive design
- 📦 pnpm for efficient package management
- 🚀 Automated deployment to GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (will be installed automatically if not present)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
pnpm build
```

### Preview

```bash
# Preview production build locally
pnpm preview
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

## Project Structure

```
src/
├── types.ts          # TypeScript interface definitions
├── data.ts           # Website data array
├── WebsiteCard.tsx   # Card component for displaying websites
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Adding New Websites

To add new websites to the portfolio, edit the `src/data.ts` file and add new entries to the `websites` array:

```typescript
{
  name: 'Your Project Name',
  description: 'Project description',
  url: 'https://your-project-url.com',
  githubRepo: 'https://github.com/username/repo',
}
```

