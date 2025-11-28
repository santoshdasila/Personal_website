# Dr. Santosh Dasila - Personal Research Portfolio

This is a React-based interactive portfolio website built with Vite, Tailwind CSS, and Framer Motion. It features acoustic simulations, a research library, and a travel journal.

## 🚀 Getting Started

### Prerequisites

1.  **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2.  **Git**: Download and install from [git-scm.com](https://git-scm.com/).

### Installation

1.  Clone or download this repository.
2.  Open your terminal in the project folder.
3.  Install dependencies:

```bash
npm install
```

### Local Development

To start the website locally on your computer to test changes:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 📦 Deployment (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages.

1.  Ensure your `package.json` has the correct `homepage` URL:
    `"homepage": "https://santoshdasila.github.io/Personal_website/"`

2.  Run the deploy command:

```bash
npm run deploy
```

This command will:
1.  Build the project (create a `dist` folder).
2.  Push that folder to a `gh-pages` branch on your GitHub repository.
3.  Your site will be live in a few minutes!

## 📂 Project Structure

- **index.html**: Main entry point.
- **index.tsx**: React entry point.
- **App.tsx**: Main layout and routing logic.
- **constants.ts**: All content data (Bio, Publications, Books, etc.).
- **types.ts**: TypeScript definitions.
- **pages/**: Individual page components (Home, About, SoundLab, etc.).
- **components/**: Reusable UI components (Navbar, Visuals).
