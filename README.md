## Started with create-vite-express

```
npx create-vite-express
```

## Installed tailwind

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Shadcn/ui: Changed alias in tsconfig.json

**Notice it's `src/client` and not `src` like in the docs**

```
"baseUrl": ".",
"paths": {
  "@/*": ["./src/client/*"]
}
```

## Shadcn/ui: Changed alias in vite.config.ts

**Notice it's `src/client` and not `src` like in the docs**

```
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src/client"),
  },
},
```

## Added shadcn/ui

```
npx shadcn@latest init
```

## Added a button from shadcn/ui

```
npx shadcn@latest add button
```
