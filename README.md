# Canvas LLM Prototype

A high-fidelity Canvas LMS interface prototype built with Next.js, focusing on the Modules page experience. This project recreates the familiar Canvas navigation and layout patterns with modern web technologies.

## Features

- **Authentic Canvas UI** - Pixel-perfect recreation of Canvas LMS interface
- **Three-Panel Layout** - Global navigation, course navigation, and sidebar
- **Interactive Components** - Module cards, toolbars, and navigation elements
- **Responsive Design** - Fixed layout optimized for desktop Canvas experience
- **ASU Branding** - Official ASU maroon and gold color scheme

## Tech Stack

- **Next.js 15** - App Router with TypeScript
- **Tailwind CSS** - Utility-first styling with custom Canvas theme
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library matching Canvas aesthetics
- **Lato Font** - Typography matching Canvas design system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the prototype

The main Canvas interface is available at `/canvas/modules`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── (app)/
│   ├── _components/     # Canvas-specific UI components
│   └── canvas/          # Canvas application routes
├── layout.tsx           # Root layout
└── page.tsx            # Landing page

components/ui/           # Reusable UI components
lib/
├── seed.ts             # Mock Canvas data
└── utils.ts            # Utilities
```

## Architecture

The application uses a nested layout approach with fixed navigation panels:

- **GlobalNav** (88px) - Main Canvas navigation with course switching
- **CourseNav** (224px) - Course-specific navigation menu  
- **RightSidebar** (320px) - Course status and upcoming items
- **Main Content** - Responsive area between navigation panels

See `CLAUDE.md` for detailed architectural guidance.
