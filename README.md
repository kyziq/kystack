# Kystack

My personal go-to stack for frontend web development 🫡

## Key Components

- Vite + React19 + TypeScript
- BiomeJS as linter and formatter
- TanStack Router for type-safe, file-based routing
- Zustand for client-side state management
- TailwindCSS and shadcn/ui for user interface
- React Compiler

### Supporting Tools

- react-helmet-async for document head manager
- lefthook for Git hooks manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - All-in-one JavaScript runtime & toolkit

If you don't have Bun installed, you can install it by following the instructions on the [official Bun website](https://bun.sh/docs/installation).

### Setting up the project

1. Clone the repository:
   ```bash
   git clone https://github.com/kyziq/kystack
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
- `bun check`: Checks the code using Biome