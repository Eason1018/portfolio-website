# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Setup Instructions

To enable GitHub Pages deployment for this repository:

1. Go to your repository's Settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. The workflow will automatically run on the next push to the `main` branch

### Accessing Your Site

Once deployed, your site will be available at:
```
https://eason1018.github.io/portfolio-website/
```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

- **Vite Base Path**: Configured in `vite.config.ts` with `base: "/portfolio-website/"` to match the GitHub Pages URL structure
- **Deployment Workflow**: Located in `.github/workflows/deploy.yml`

## Technologies Used

- React 18
- TypeScript
- Vite 5
- SWC for fast compilation
