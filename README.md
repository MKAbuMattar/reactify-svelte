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

Before using this package, make sure you have the following prerequisites:

- Create React App with Vite

```bash
# npm
npm init vite@latest my-react --template react
npm init vite@latest my-react --template react-ts

# yarn
yarn create vite my-react --template react
yarn create vite my-react --template react-ts

# pnpm
pnpx create-vite my-react --template react
pnpx create-vite my-react --template react-ts
```

- Install Svelte

```bash
# npm
npm install --save svelte

# yarn
yarn add svelte

# pnpm
pnpm add svelte
```

- Install Sveltejs plugin for Vite

```bash
# npm
npm install --save-dev @sveltejs/vite-plugin-svelte

# yarn
yarn add --dev @sveltejs/vite-plugin-svelte

# pnpm
pnpm add --dev @sveltejs/vite-plugin-svelte
```

- Install `reactify-svelte`

```bash
# npm
npm install --save reactify-svelte

# yarn
yarn add reactify-svelte

# pnpm
pnpm add reactify-svelte
```

**_Note:_** If you are using TypeScript, you need to add the following to the `src/svelte-components.d.ts` file.

```tsx
// add the following to the svelte-components.d.ts file
declare module '*.svelte' {
  import { SvelteComponent } from 'svelte';

  const value: SvelteComponent;
  export default value;
}
```

### Configuration

To use `reactify-svelte`, you need to configure the following:

- Add the `@sveltejs/vite-plugin-svelte` plugin to the `vite.config.(js|ts)` file.

```ts
// add the following to the vite.config.(js|ts) file
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svelte()],
});
```

### Example

Create a Svelte component file `./components/Hello.svelte` with the following content:

```svelte
<script lang="ts">
  export let txt = "I'm Svelte!";
  export let counter = 0;
</script>

<div>
  <h1>{txt}</h1>
  <p>Counter: {counter}</p>
</div>

<style>
  div {
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    padding: 2rem;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-size: 4rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #333;
  }
</style>
```

Then, create a React component file `App.tsx` with the following content:

```tsx
import { useState } from 'react';
import { SvelteWrapper } from 'reactify-svelte';
import Hello__SvelteComponent__ from './components/Hello.svelte';

interface SvelteProps {
  txt: string;
  counter: number;
}

const HelloSvelteComponent = SvelteWrapper<SvelteProps>(
  Hello__SvelteComponent__,
);

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <HelloSvelteComponent txt="Hello Svelte from React!" counter={counter} />
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setCounter(0)}>
        Reset
      </button>
    </>
  );
};

export default App;
```

> **_Note:_** If you are using TypeScript, you need to add the following to the `src/svelte-components.d.ts` file.

```tsx
// add the following to the svelte-components.d.ts file
declare module '*.svelte' {
  import { SvelteComponent } from 'svelte';

  const value: SvelteComponent;
  export default value;
}
```

## API

### `SvelteWrapper`

This is a higher-order component (HOC) provided by `reactify-svelte` that wraps the Svelte component and makes it usable in React applications. It takes the Svelte component as an argument and returns a new React component.

## License

This package is licensed under the MIT License.
