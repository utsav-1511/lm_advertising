# LM Advertising Website

A React-based website for LM Advertising, an outdoor advertising, branding, and printing agency based in Prayagraj.

## Features

- Responsive homepage
- Hoarding image carousel
- About page with company story and founder note
- Services section
- Locations and contact sections
- Light and dark theme support
- WhatsApp contact button

## Tech Stack

- React
- React Router
- Framer Motion
- Tailwind CSS
- Lucide React
- Parcel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm start
```

Build the project:

```bash
npm run build
```

## Project Structure

```txt
src/
  Pages/
    Home.js
    About.js
    ReachUs.js
    Locations.js
  components/
    Navbar.js
    WhatsAppBtn.js
  data/
    AboutData.js
    stats.js
  mainLayout.js
  script.js

public/
  images/
  logo.png

style.css
index.html
```

## Updating Images

Hoarding carousel images are defined in:

```txt
src/Pages/Home.js
```

About page content and hero image are defined in:

```txt
src/data/AboutData.js
```

Place new images inside:

```txt
public/images/
```

Then reference them like:

```js
src: "/images/your-image-name.jpg"
```

## Author

Developed for LM Advertising.
