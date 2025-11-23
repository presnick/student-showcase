# UMSI 211 Final Project Showcase

A React-based showcase website for displaying student final projects from UMSI 211 Fall 2025.

See `CONTRIBUTING.MD` for how to add your project!

## Features

- 🎨 **Professional Design** - Clean, modern UI with Michigan branding
- 🔍 **Filtering** - Filter projects by type (Web App, Data Visualization, Simulation, etc.)
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Fast Loading** - All project data bundled at build time
- 🔧 **Easy to Update** - Just add a JSON file to add a new project

## Project Structure

```
student-showcase/
├── src/
│   ├── components/            # Reusable React components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.module.css
│   │   ├── FilterBar.tsx
│   │   └── FilterBar.module.css
│   ├── pages/                 # Page components
│   │   └── HomePage.tsx
│   ├── types/                 # TypeScript type definitions
│   │   └── project.ts
│   ├── data/
│   │   ├── projects/          # Add project JSON files here
│   │   │   ├── SCHEMA.md      # Documentation for JSON format
│   │   │   ├── example-project-1.json
│   │   │   └── ...
│   │   └── loadProjects.ts    # Auto-imports all JSON files
│   ├── styles/
│   │   ├── tokens.css         # Design tokens (:root variables)
│   │   └── global.css         # Global layout and shared styles
│   ├── App.tsx                # Root component
│   └── main.tsx               # Entry point
├── public/
│   └── images/                # Place project screenshots here
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
cd student-showcase
npm install
```

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to deploy.

## Adding a New Project

### Step 1: Create JSON File

Create a new JSON file in `src/data/projects/` with this format:

```json
{
  "studentName": "Your Name",
  "projectTitle": "Your Project Title",
  "description": "A brief 1-2 sentence description of your project.",
  "projectType": ["Web App", "Data Visualization"],
  "projectUrl": "https://your-project-url.com",
  "githubUrl": "https://github.com/yourusername/repo",
  "projectImage": "/images/your-screenshot.jpg",
  "tags": ["React", "Python", "D3.js"],
  "reflections": "Optional: a quote about what you learned or are proud of.",
  "studentPhoto": "/images/your-photo.jpg",
  "videoUrl": "https://youtube.com/watch?v=..."
}
```

See `src/data/projects/SCHEMA.md` for detailed field descriptions.

### Step 2: Add Screenshot (Optional)

1. Take a screenshot of your project (recommended: 800x600px)
2. Save it to `public/images/`
3. Reference it in your JSON: `"projectImage": "/images/your-screenshot.jpg"`

### Step 3: Test

```bash
npm run dev
```

Your project should appear in the showcase!

### Step 4: Deploy

After adding/updating projects:

```bash
npm run build
git add .
git commit -m "Add new project: Your Project Title"
git push
```

## Project Types

Available project type filters:

- **Web App** - Interactive web applications
- **Data Visualization** - Charts, graphs, interactive visualizations
- **Simulation** - Monte Carlo simulations, modeling
- **API/Backend** - Server-side applications, APIs
- **Mobile App** - Mobile applications
- **Other** - Other types of projects

You can use multiple types for a single project.

## Deployment

### GitHub Pages

1. Update `vite.config.ts` to set the base path:

```typescript
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/student-showcase/', // Replace with your repo name
})
```

2. Build and deploy:

```bash
npm run build
# Copy dist/ contents to gh-pages branch or use gh-pages package
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Platforms

The `dist/` folder after `npm run build` contains static files that can be hosted anywhere.

## Design System

The site uses a professional design system with:

- **Colors**: Michigan Blue (#00274C) and Maize (#FFCB05)
- **Typography**: System font stack for optimal performance
- **Spacing**: 8px base unit for consistent spacing
- **Responsive**: Mobile-first with breakpoints at 480px and 768px

## Customization

### Change Course Information

Edit `src/pages/HomePage.tsx`:

```typescript
<h1 className="title">UMSI 211 Fall 2025</h1>
<p className="subtitle">Final Project Showcase</p>
```

### Modify Colors

Edit CSS variables in `src/styles/tokens.css`:

```css
:root {
  --color-primary: #00274C;
  --color-secondary: #FFCB05;
  /* ... */
}
```

### Update Footer

Edit the footer section in `src/pages/HomePage.tsx`:

```javascript
<footer className="footer">
  <div className="container">
    <p>Your Course Name | Your Semester</p>
    <p>Your University</p>
  </div>
</footer>
```

## Technical Details

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite (fast, modern build system)
- **Dynamic Imports**: Uses `import.meta.glob` for automatic JSON file discovery
- **No Runtime Dependencies**: All project data bundled at build time
- **CSS**: CSS Modules for component styles + design tokens (custom properties)
- **Path Aliases**: Uses `@/` prefix for absolute imports (configured via `vite-tsconfig-paths`)

## Troubleshooting

### Project not showing up

- Make sure your JSON file is in `src/data/projects/`
- Check that it ends with `.json`
- Verify JSON is valid (use a JSON validator)
- Restart the dev server

### Images not loading

- Images should be in `public/images/`
- Use path starting with `/images/` in JSON
- Check file name spelling and case

### Build fails

- Run `npm install` to ensure dependencies are installed
- Check for JSON syntax errors
- Review console for specific error messages

## License

This project is for educational use by UMSI 211 students and instructors.

## Credits

Built with React and Vite for UMSI 211 Fall 2025.
