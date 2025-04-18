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
4. Open your browser - Vite will automatically open http://localhost:5173

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

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