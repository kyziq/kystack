import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useCatStore } from "@/stores/useCatStore";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const cat = useCatStore((state) => state.cat);
	const increaseCat = useCatStore((state) => state.increaseCat);

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-89px)] ">
			<SEO
				title="Welcome to Kystack"
				description="Kyziq's go-to stack for frontend web development, Kystack!"
			/>
			<div className="text-center p-8">
				<h1 className="text-3xl font-bold mb-6">Welcome to Kystack</h1>
				<p className="text-xl mb-4">Number of cats: {cat}</p>
				<Button onClick={() => increaseCat(1)} className="text-lg">
					Add a 😺
				</Button>
			</div>
		</div>
	);
}
