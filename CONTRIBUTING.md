# Contributing: Add Your Project to the Showcase

We welcome PRs from students to add their final projects to this showcase.

## Quick Start (Fork-and-PR)

1. Fork this repository to your own GitHub account.
2. Open the fork in a github codespace (or clone your fork locally).
3. Add your JSON file and screenshot(s).
4. Run local validation: 
- `npm install`
- `npm run validate`
- `npm run dev` and check that your project displays correctly in a browser.
5. Commit and push to your fork on GitHub.
6. On the GitHub website, open a Pull Request from your fork/branch to this repo's `main`. GitHub Actions will:
  - Validate your JSON against the schema
  - Check that your referenced image exists and is a reasonable size
  - Build the site to ensure it compiles
  - (If checks fail, please read the logs, fix issues, push the changes, and then check the pull request to see if the checks pass.)

## File Locations

- Add a JSON file: `src/data/projects/your-name-or-title.json`
- Add a screenshot: `public/images/your-screenshot.jpg`

## JSON Format

See `src/data/projects/SCHEMA.md` and `src/data/projects/project.schema.json`.

Minimal example:
```json
{
  "studentName": "First Last",
  "projectTitle": "Project Title",
  "description": "1-2 sentence description.",
  "projectType": ["Web App"],
  "projectUrl": "https://example.com",
  "githubUrl": "https://github.com/you/your-repo",
  "projectImage": "/images/your-screenshot.jpg",
  "tags": ["React", "API"],
  "reflections": "Optional: a quote about what you learned or are proud of.",
  "studentPhoto": "/images/your-photo.jpg",
  "videoUrl": "https://youtube.com/watch?v=..."
}
```

## Image Guidelines

- Place in `public/images/` and reference as `/images/filename.jpg`
- Recommended size: around 800×600px
- Keep file size under ~800KB

## Local Preview (optional)

```
npm install
npm run dev
```



## Code of Conduct

Be respectful and professional. Instructors reserve the right to make small edits for formatting consistency.
