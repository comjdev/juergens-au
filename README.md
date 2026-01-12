# Jürgens Software Consulting - Portfolio Website

A modern, interactive portfolio website showcasing the work and expertise of Christoph Jürgens, a Senior Software Engineer based in Melbourne, Australia. Built with Next.js 16 and featuring stunning animations, 3D effects, and a responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations and transitions
- **3D Graphics**: Interactive 3D elements powered by Three.js and React Three Fiber
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Error Tracking**: Integrated Sentry for production error monitoring
- **Dark Mode**: Theme support with next-themes
- **Accessible**: Built with accessibility best practices
- **SEO Friendly**: Optimized for search engines

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)

### 3D & Animations

- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Globe Visualization**: [three-globe](https://github.com/vasturiano/three-globe)

### UI Components

- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Tabler Icons](https://tabler.io/icons)
- **Animations**: [Lottie React](https://lottiereact.com/)
- **Marquee**: [React Fast Marquee](https://www.react-fast-marquee.com/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

### DevOps & Monitoring

- **Error Tracking**: [Sentry](https://sentry.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd juergens
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (if needed)

   Create a `.env.local` file in the root directory:

   ```env
   # Sentry Configuration (optional)
   SENTRY_DSN=your_sentry_dsn_here
   NEXT_PUBLIC_SENTRY_DSN=your_public_sentry_dsn_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
juergens/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── BentoGrid.tsx
│   │   ├── CanvasRevealEffect.tsx
│   │   ├── FloatingNav.tsx
│   │   └── ...
│   ├── Hero.tsx          # Hero section
│   ├── Skills.tsx        # Skills showcase
│   ├── Brands.tsx        # Brand logos
│   ├── Experiance.tsx    # Experience section
│   ├── Process.tsx       # Process/workflow
│   ├── RecentProjects.tsx # Projects showcase
│   └── Footer.tsx        # Footer component
├── data/                  # Data and configuration
│   └── index.ts          # Project data, skills, etc.
├── lib/                   # Utility functions
│   ├── utils.ts          # Utility functions
│   └── bg-utils.ts       # Background utilities
├── public/                # Static assets
│   ├── *.svg             # SVG icons and logos
│   └── *.png             # Images
└── instrumentation.ts     # Sentry instrumentation
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

#### CanvasRevealEffect

A custom shader-based animation component using WebGL. Features graceful fallback when WebGL is unavailable.

#### BentoGrid

A modern grid layout component inspired by Apple's Bento design, showcasing projects and information in an elegant grid format.

#### FloatingNav

A floating navigation bar that follows the user as they scroll, providing quick access to different sections.

## 🎨 Customization

### Updating Content

Most content is managed in `/data/index.ts`:

- `navItems` - Navigation menu items
- `gridItems` - Grid layout items
- `skills` - Skills and technologies
- `projects` - Project showcase data
- `brands` - Brand/client logos
- `experiences` - Work experience

### Styling

The project uses Tailwind CSS 4.0 with custom theme configuration in `app/globals.css`. You can customize:

- Colors
- Typography
- Spacing
- Animations

### Adding New Sections

1. Create a new component in `/components`
2. Import and add it to `app/page.tsx`
3. Update navigation items in `/data/index.ts` if needed

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Configure environment variables if needed
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- AWS Amplify
- Netlify
- Railway
- Render
- Self-hosted servers

## 🔧 Configuration

### Sentry Setup

If you want to use Sentry for error tracking:

1. Create a Sentry account and project
2. Add your DSN to `.env.local`
3. Configure in `sentry.server.config.ts` and `sentry.client.config.ts`

### WebGL Support

The `CanvasRevealEffect` component automatically detects WebGL availability and gracefully falls back if WebGL is not supported. No additional configuration needed.

## 📝 License

This project is private and proprietary.

## 👤 Author

**Christoph Jürgens**

- Senior Software Engineer
- Melbourne, Australia
- [Portfolio Website](https://your-domain.com)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by modern design systems
- 3D graphics powered by [Three.js](https://threejs.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Tabler Icons](https://tabler.io/icons)

---

**Built with ❤️ using Next.js and React**
