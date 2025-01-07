import { Link, useLoaderData } from "@tanstack/react-router";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  loader: async () => {
    return {
      message: 'Hello from About'
    }
  },
  component: () => {
    const { message } = aboutRoute.useLoaderData();
    return (
      <div>
        <h2>About Page</h2>
        <p>{message}</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}); 