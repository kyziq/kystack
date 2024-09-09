import { RouterProvider, createRouter } from '@tanstack/react-router';
import Error404 from './components/error-404';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  basepath: '/', // If deploy to a subdirectory, set this to the subdirectory
  defaultPreload: 'intent',
  defaultNotFoundComponent: () => {
    return <Error404 />;
  },
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
