import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { HelmetProvider } from 'react-helmet-async';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <header className="p-2 flex justify-between items-center">
            <nav className="flex gap-2">
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>{' '}
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
            </nav>
            <ModeToggle />
          </header>
          <hr />
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
          <TanStackRouterDevtools />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
