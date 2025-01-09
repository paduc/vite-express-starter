import reactLogo from "../assets/react.svg";
import { Link } from "@tanstack/react-router";
import Counter from "../components/Counter";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <Link to="/about">Go to About Page</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}); 