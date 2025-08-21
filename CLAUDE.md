# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 Canvas LLM prototype that recreates the Canvas LMS interface with a focus on the Modules page. The application uses the App Router with TypeScript, Tailwind CSS, and Radix UI components.

### Layout Structure

The app uses a nested layout approach:
- Root layout (`app/layout.tsx`) - Sets up global styles and Lato font
- Canvas layout (`app/(app)/canvas/layout.tsx`) - Creates the main Canvas interface with fixed navigation panels

### Navigation System

The Canvas interface consists of three fixed navigation panels:
- **GlobalNav** (left, 88px width) - Main Canvas navigation with icons and labels
- **CourseNav** (left-center, 224px width) - Course-specific navigation menu
- **RightSidebar** (right, 320px width) - Course status and upcoming items

Main content area is positioned between these panels with responsive padding.

### Data Management

Seed data is centralized in `lib/seed.ts` containing:
- `globalNav` - Global navigation items with icons and badges
- `courseNav` - Course navigation items with visibility states
- `courseStatus` - Course publishing status and available actions
- `moduleData` - Module information and items

**Important**: Avoid naming exports as `module` as this conflicts with Node.js/webpack's global module object.

### Component Organization

- `app/(app)/_components/` - Canvas-specific UI components
- `components/ui/` - Reusable UI components from Radix UI
- `lib/` - Utilities and data (utils.ts for cn helper, seed.ts for mock data)

### Styling System

- Tailwind CSS with custom brand colors:
  - `brand-maroon: #8C1D40` (ASU maroon)
  - `brand-gold: #FFC627` (ASU gold)
  - `success: #22C55E` (green for published states)
- Lato font family as primary typeface
- Consistent spacing and border radius values

### Key UI Patterns

- Fixed layout with 50px header height
- Lucide React icons throughout
- Radix UI components for interactive elements (tooltips, dropdowns)
- Hover states and transitions for all interactive elements
- Conditional rendering based on data properties (published, hidden, selected states)
- when I say the color marron it is: #8C1D40