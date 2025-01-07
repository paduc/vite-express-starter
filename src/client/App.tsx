import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

// Wrap the App component with QueryClientProvider
function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

function App() {
  const queryClient = useQueryClient();

  // Query for fetching counter
  const { data: counterData } = useQuery({
    queryKey: ['counter'],
    queryFn: () => fetch('/counter').then(res => res.json()),
  });

  // Mutation for updating counter
  const { mutate } = useMutation({
    mutationFn: () => fetch('/counter', { method: 'POST' }).then(res => res.json()),
    onSuccess: () => {
      // Invalidate and refetch the counter query
      queryClient.invalidateQueries({ queryKey: ['counter'] });
    },
  });

  function handleClick() {
    mutate();
  }

  return (
    <div className="App">
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
        <Button onClick={handleClick}>
          counter is {counterData?.count ?? 0}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default AppWrapper;
