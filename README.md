# Kystack

My personal go-to stack for frontend web development 🫡

## Key Components

- [Vite](https://vitejs.dev/) - Frontend build tool
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Biome](https://biomejs.dev/) - Fast, modern linter and formatter
- [TanStack Router](https://tanstack.com/router/latest) - Type-safe, file-based routing
- [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) - UI styling

### Supporting Tools

* [react-helmet-async](https://github.com/staylor/react-helmet-async) - Document head manager for React
* [lefthook](https://github.com/evilmartians/lefthook) - Git hooks manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - All-in-one JavaScript runtime & toolkit

If you don't have Bun installed, you can install it by following the instructions on the [official Bun website](https://bun.sh/docs/installation).

### Setting up the project

1. Clone the repository:
   ```bash
   git clone https://github.com/Kyziq/kystack
   cd kystack
   ```
2. Install dependencies:
   ```bash
   bun install
   ```

### Available Scripts

- `bun dev`: Starts the development server with hot-reloading
- `bun build`: Builds the project for production
- `bun preview`: Serves the production build locally
- `bun format`: Formats the code using Biome
- `bun lint`: Lints the code using Biome
- `bun check`: Checks the code using Biome

### Future Improvements

Explore [TanStack Start](https://tanstack.com/start/latest) and [React Compiler](https://react.dev/learn/react-compiler)
