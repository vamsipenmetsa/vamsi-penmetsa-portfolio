# Vamsi Penmetsa - Professional Portfolio

A modern, professional portfolio website for Vamsi Penmetsa, showcasing his experience as a DevOps and SRE professional.

## Features

- Clean, professional design with subtle animations
- Responsive layout that works on all devices
- Interactive UI elements with smooth transitions
- Section-based organization of content
- Optimized performance
- Dark mode ready

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- Modern JavaScript with Intersection Observer API

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser - Vite will automatically open https://vamsipenmetsa.github.io/vamsi-penmetsa-portfolio/

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

1.  **Base Path:** Ensure the `base` property in `vite.config.js` is set to your repository name (e.g., `/vamsi-penmetsa-portfolio/`).
    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite'

    export default defineConfig({
      base: '/vamsi-penmetsa-portfolio/',
      // ... other config
    })
    ```
2.  **Build:** Run `npm run build` to generate the production files in the `dist` folder.
3.  **Push to GitHub:** Commit and push your changes, including the `dist` directory, to your main branch.
4.  **Configure GitHub Pages:**
    *   Go to your repository settings on GitHub.
    *   Navigate to the "Pages" section.
    *   Under "Build and deployment", select "Deploy from a branch".
    *   Choose your main branch (`main` or `master`) and select the `/dist` folder as the source.
    *   Save the changes.
5.  **Live Site:** Your portfolio should be live shortly at: [https://vamsipenmetsa.github.io/vamsi-penmetsa-portfolio/](https://vamsipenmetsa.github.io/vamsi-penmetsa-portfolio/)

## Project Structure

- `index.html` - Main HTML structure
- `src/style.css` - Styles with Tailwind CSS
- `src/main.js` - JavaScript for interactive elements
- `public/` - Static assets (can add images, fonts, etc.)

## Customization

### Profile Image

Replace the placeholder with a real profile image:

```css
.profile-image {
  background-image: url('/path/to/your/image.jpg');
}
```

### Social Links

Update the links in the HTML file to point to your social profiles:

```html
<a href="https://linkedin.com/in/your-profile" target="_blank" class="social-link">
  <i class="fab fa-linkedin"></i>
</a>
```

### Colors

Modify the color variables in the `:root` section of `style.css` to change the color scheme:

```css
:root {
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  /* other colors */
}
```