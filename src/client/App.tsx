import "./App.css";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "@tanstack/react-query";
import { RouterProvider, Router, Route, RootRoute, Link, Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

// Create a client
const queryClient = new QueryClient();

// Define your root route
const rootRoute = createRootRoute();


// Define your home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Home() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <Link to="/about">Go to About Page</Link>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
})

// Define your about route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return (
      <div>
        <h2>About Page</h2>
        <p>This is the about page of our application.</p>
        <Link to="/">Return to Home</Link>
      </div>
    )
  }
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

// Create the router instance
const router = createRouter({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Counter component (extracted from original App component)
function Counter() {
  const { data: counterData } = useQuery({
    queryKey: ['counter'],
    queryFn: () => fetch('/counter').then(res => res.json()),
  });

  const { mutate } = useMutation({
    mutationFn: () => fetch('/counter', { method: 'POST' }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counter'] });
    },
  });

  return (
    <Button onClick={() => mutate()}>
      counter is {counterData?.count ?? 0}
    </Button>
  );
}

// Wrap the Router with QueryClientProvider
function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default AppWrapper;
