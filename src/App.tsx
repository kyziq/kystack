import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return <RouterProvider router={router} />;
  // return (
  //   <div className="h-screen flex items-center justify-center">
  //     <h1 className="text-4xl font-bold">Kystack</h1>
  //   </div>
  // );
};

export default App;
