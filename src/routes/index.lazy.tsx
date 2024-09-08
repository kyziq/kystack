import { Button } from '@/components/ui/button';
import { useCatStore } from '@/stores/useCatStore';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const cats = useCatStore((state) => state.cats);
  const increaseCats = useCatStore((state) => state.increaseCats);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Kystack</h1>
        <p className="text-xl mb-4">Number of cats: {cats}</p>
        <Button onClick={() => increaseCats(1)} className="text-lg">
          Add a 😺
        </Button>
      </div>
    </div>
  );
}
