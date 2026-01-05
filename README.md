# adhdm8.github.io

Welcome to my GitHub Pages site built with [Astro](https://astro.build)! This is a static site that is automatically deployed to GitHub Pages whenever changes are pushed to the main branch.

## 🚀 Project Overview

This site is built using Astro, a modern static site builder that allows for building fast, content-focused websites. It's deployed automatically to GitHub Pages using GitHub Actions.

## ✨ Features

- Fast loading times with Astro's island architecture
- Responsive design
- Modern web standards
- SEO-friendly
- Automatically deployed to GitHub Pages

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site builder
- [GitHub Pages](https://pages.github.com/) - Static hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 📦 Project Structure

```text
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable Astro components
│   ├── layouts/      # Page layouts
│   └── pages/        # Page routes
├── .github/workflows/ # GitHub Actions workflows
├── astro.config.mjs  # Astro configuration
└── package.json      # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or another package manager

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/adhdm8/adhdm8.github.io.git
   cd adhdm8.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:4321](http://localhost:4321)

### Building for Production

To build the site for production:

```bash
npm run build
```

This will generate the static files in the `dist/` directory.

## 🚢 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## 🤝 Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).