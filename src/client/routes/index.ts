import { createRootRoute } from '@tanstack/react-router';
import { homeRoute } from './Home';
import { aboutRoute } from './About';

export const rootRoute = createRootRoute();
export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]); 