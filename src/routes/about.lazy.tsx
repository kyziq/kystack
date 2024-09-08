import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>This is /about</h3>
    </div>
  );
}
