# reactify-svelte

`reactify-svelte` is am NPM that provides a simple and convenient way to use Svelte components in React applications. It is a wrapper around the `svelte` package that provides a React components to mount Svelte components in React applications.

## Installation

To install `reactify-svelte`, use the following command:

```bash
# npm
npm install --save reactify-svelte

# yarn
yarn add reactify-svelte

# pnpm
pnpm add reactify-svelte
```

## Usage

### Prerequisites

This package requires the following:

- Create React App with Vite
- Svelte
- Sveltejs plugin for Vite

```bash
# npm
npm install --save svelte
npm install --save-dev @sveltejs/vite-plugin-svelte

# yarn
yarn add svelte
yarn add --dev @sveltejs/vite-plugin-svelte

# pnpm
pnpm add svelte
pnpm add --dev @sveltejs/vite-plugin-svelte
```

### Configuration

To use `reactify-svelte`, you need to configure the following:

- Add the `@sveltejs/vite-plugin-svelte` plugin to the `vite.config.ts` file.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svelte()],
});
```

### Example

```svelte
<script lang="ts">
  export let txt = "Hello from Svelte!";
  export let counter = 0;
</script>

<div>
  <h1>{txt}</h1>
  <p>Counter: {counter}</p>
</div>

```

```jsx
import React, { useState } from 'react';
import { SvelteComponent } from 'reactify-svelte';
import Hello__SvelteComponent_ from './components/Hello.svelte';

interface SvelteProps {
  txt: string;
  counter?: number;
}

const HelloComponent = React.memo(
  SvelteComponent<SvelteProps>(Hello__SvelteComponent_),
);

const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <HelloComponent txt="Hello from React!" counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
};

export default MyComponent;
```

## API

### SvelteComponent

```tsx
SvelteComponent<P>(
  Component: new (...args: any[]) => { $set: (props: P) => void }
): React.FC<P>
```

This component takes the following parameters:

- `<P>` (required): The type of the Svelte component props.
- `Component` (required): The Svelte component to mount in the React application.

The component return:

- `React.FC<P>`: A React functional component that takes the props of the Svelte component as its props.

## License

This package is licensed under the MIT License.
