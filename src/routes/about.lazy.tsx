import { SEO } from "@/components/SEO";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div>
			<SEO
				title="About Kystack"
				description="Kyziq's go-to stack for frontend web development, Kystack!"
			/>
			<h3>This is /about</h3>
		</div>
	);
}
