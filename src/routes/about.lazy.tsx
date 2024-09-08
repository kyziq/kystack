import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div>
      <h3>This is /about</h3>
    </div>
  );
}
