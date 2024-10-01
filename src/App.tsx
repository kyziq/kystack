import NotFound from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Set up a Router instance
const router = createRouter({
	routeTree,
	basepath: "/", // If deploy to a subdirectory, set this to the subdirectory
	defaultPreload: "intent",
	defaultNotFoundComponent: () => {
		return <NotFound />;
	},
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
