# Kystack

My personal go-to stack for frontend web development 🫡

## Key Components

- [Rsbuild](https://rsbuild.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/)
- [TanStack Router](https://tanstack.com/router/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm

If you don't have pnpm installed, you can install it using npm:

```bash
npm install -g pnpm
```

### Setting up the project

1. Clone the repository:

   ```bash
   git clone https://github.com/Kyziq/kystack
   cd kystack
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```

### Available Scripts

- `pnpm dev`: Starts the development server with hot-reloading
- `pnpm build`: Builds the project for production
- `pnpm preview`: Serves the production build locally
- `pnpm format`: Formats the code using Biome
- `pnpm lint`: Lints the code using Biome
- `pnpm check`: Checks the code using Biome

## Package Manager

Currently using [pnpm](https://pnpm.io/). Will switch to [Bun](https://bun.sh/) when officially supported.

> **Note:** Tracking Bun support for Rsbuild via [GitHub Issue #11628](https://github.com/oven-sh/bun/issues/11628)

## Installing shadcn/ui

shadcn/ui CLI doesn't support Rspack yet. Therefore, need to manually install shadcn/ui and the components.

> **Note:** Tracking for Rsbuild support via [GitHub Issue #4756](https://github.com/shadcn-ui/ui/issues/4756)
