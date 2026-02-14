# AlphaBuild Project – README

## Overview

AlphaBuild is a modern, responsive construction and infrastructure company website built with Next.js, React, and Tailwind CSS. The project features animated transitions, a clean UI, and a modular component structure for easy maintenance and scalability.

---

## Project Structure

```
alphabuild/
├── src/
│   ├── app/
│   │   ├── About/
│   │   ├── Blog/
│   │   ├── Company/
│   │   ├── Contact/
│   │   ├── Projects/
│   │   ├── Services/
│   │   └── page.js
│   ├── components/
│   │   ├── Home/
│   │   │   ├── navbar.js
│   │   │   ├── projects.js
│   │   │   └── AnimatedNavLink.js
│   │   └── UI/
│   │       ├── buton.js
│   │       ├── ContactForm.js
│   │       ├── ContactMap.js
│   │       ├── footer2.js
│   │       └── logo.js
│   └── images/
│       └── ... (project images)
├── public/
│   └── images/
│       └── ... (static images)
└── README.md
```

---

## Key Components & Pages

### 1. **Navigation (`navbar.js`)**

- Responsive navigation bar with animated transitions.
- Desktop: Horizontal links, animated scroll effect, and a "Contact Us" button.
- Mobile: Hamburger menu, animated slide-in menu, and a full-width "Contact Us" button.

### 2. **Home/Projects Showcase (`projects.js`)**

- Animated project cards with category, title, and "View More" button.
- Responsive layout: horizontal on desktop, stacked on mobile/tablet.
- Uses your color palette for highlights and overlays.

### 3. **Pages**

- **About:** Company overview, stats with animated counters, and sector highlights.
- **Projects:** Filterable project grid with animated cards and a featured projects section.
- **Services:** Service descriptions, animated hero/CTA, and responsive grid.
- **Company:** Team showcase with parallax hero and animated cards.
- **Blog:** Animated hero, article cards, and "Load More" functionality.
- **Contact:** Animated hero, contact info, social links, contact form, and map.

### 4. **UI Components**

- **Button (`buton.js`):** Reusable button with variants and full-width support.
- **ContactForm:** Animated form that opens the user's email client.
- **ContactMap:** Embeds a map/location section.
- **Footer2:** Footer with company info and links.
- **Logo:** SVG/graphic logo component.

---

## Animations

- Uses `framer-motion` for smooth, staggered, and parallax animations throughout the site.
- Hero sections feature parallax text movement on mouse/touch.
- Cards and sections animate in with fade/slide effects for a premium feel.

---

## Styling

- Built with Tailwind CSS for rapid, utility-first styling.
- Color palette uses `#F4B400` (yellow/gold) for highlights and CTAs.
- Responsive layouts for all screen sizes.

---

## Customization

- **Images:** Replace images in `/public/images/` with your own.
- **Colors:** Update Tailwind config or component classes for branding.
- **Content:** Edit text and data in each page/component as needed.

---

## Running the Project

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Run the development server:**
   ```
   npm run dev
   ```
3. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## Notes

- All navigation and buttons are accessible and keyboard-friendly.
- The project is modular: add, remove, or update sections easily.
- For deployment, build with `npm run build` and deploy the `.next` output.

---

## Credits

- Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).
- Icons from [react-icons](https://react-icons.github.io/react-icons/).

---

**Enjoy building with AlphaBuild!**
