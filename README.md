# Akari Studios

A modern, production-ready photography portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Single-page scrolling design** with smooth anchor navigation
- **Dark green cutting mat aesthetic** - craft-inspired design workbench theme
- **Photo print styling** - images styled as physical prints with borders and shadows
- **Sticky note accent elements** - yellow, pink, and blue accent cards
- **Masonry gallery** with accessible lightbox (keyboard navigation)
- **Contact form** with validation and FAQ accordion
- **Mobile-first responsive design**
- **Optimized performance** with Next.js Image optimization
- **Subtle animations** powered by Framer Motion

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushkarkare/photography.git
cd photography
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to `/public/work/` (see `PLACEHOLDER_IMAGES.md` for naming conventions)

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
photography/
├── public/
│   └── work/               # Your photography images
│       └── PLACEHOLDER_IMAGES.md
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles + Tailwind
│   │   ├── layout.tsx      # Root layout with fonts
│   │   └── page.tsx        # Main page component
│   └── components/
│       ├── Navigation.tsx  # Header + mobile menu
│       ├── Hero.tsx        # Hero section
│       ├── Work.tsx        # Gallery section
│       ├── Lightbox.tsx    # Image lightbox modal
│       ├── PhotoPrint.tsx  # Reusable photo print component
│       ├── Services.tsx    # Services sticky notes
│       ├── About.tsx       # About section
│       ├── Contact.tsx     # Contact form + FAQ
│       └── Footer.tsx      # Footer
├── tailwind.config.ts      # Tailwind theme configuration
├── next.config.mjs         # Next.js configuration
└── package.json
```

## Adding Your Photos

1. Navigate to `/public/work/`
2. Read `PLACEHOLDER_IMAGES.md` for required filenames and dimensions
3. Replace placeholder files with your actual photos
4. Recommended: Optimize images before adding (use tools like [Squoosh](https://squoosh.app/))

### Required Images

**Hero Section:**
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`

**Gallery:**
- `work-1.jpg` through `work-9.jpg`

**About:**
- `about-portrait.jpg`

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  mat: {
    DEFAULT: "#007060",  // Main background
    dark: "#005A4D",
    light: "#008573",
  },
  cream: "#EAF6F4",       // Text color
  sticky: {
    yellow: "#FFD86A",
    pink: "#FF7AA8",
    blue: "#6ED0FF",
  },
}
```

### Fonts

The site uses Google Fonts (Inter + Playfair Display). Modify in `src/app/layout.tsx`.

### Content

- **Services**: Edit the `services` array in `src/components/Services.tsx`
- **FAQs**: Edit the `faqs` array in `src/components/Contact.tsx`
- **Bio**: Edit the text in `src/components/About.tsx`
- **Gallery**: Edit the `workItems` array in `src/components/Work.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Deploy!

### Other Platforms

```bash
npm run build
```

The output in `.next/` can be deployed to any Node.js hosting platform.

## Form Integration

The contact form currently simulates submission. To make it functional:

1. **Formspree**: Add your form endpoint to the form action
2. **EmailJS**: Integrate EmailJS for client-side email sending
3. **API Route**: Create an API route in `src/app/api/contact/route.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with care by Akari Studios
