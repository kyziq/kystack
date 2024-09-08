import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
