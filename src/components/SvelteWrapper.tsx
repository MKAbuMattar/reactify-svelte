import React from 'react';
import { SvelteComponent } from './SvelteComponent';
import type { ComponentConstructorOptions } from '../types';

/**
 * @Component SvelteWrapper
 *
 * @description A wrapper component that allows you to use Svelte components in React.
 *
 * @param Component - The Svelte component to wrap.
 *
 * @returns A React component that renders the Svelte component.
 *
 * @example
 *
 * ```md
 * Create a Svelte component file `./components/Hello.svelte` with the following content:
 * ```
 *
 * ```svelte:
 * <script lang="ts">
 *  export let txt = "I'm Svelte!";
 *  export let counter = 0;
 * </script>
 * ```
 *
 * Then, create a React component file `App.tsx` with the following content:
 *
 * ```tsx
 * import { useState } from 'react';
 * import { SvelteWrapper } from 'reactify-svelte';
 * import Hello__SvelteComponent__ from './components/Hello.svelte';
 *
 * interface SvelteProps {
 *  txt: string;
 *  counter: number;
 * }
 *
 * const HelloSvelteComponent = SvelteWrapper<SvelteProps>(
 *  Hello__SvelteComponent__,
 * );
 *
 * export default function App() {
 *  const [counter, setCounter] = useState(0);
 *
 *  return (
 *    <div>
 *      <HelloSvelteComponent txt="Hello Svelte from React!" counter={counter} />
 *     <button type="button" onClick={() => setCounter(counter + 1)}>
 *       Increment
 *     </button>
 *     <button type="button" onClick={() => setCounter(counter - 1)}>
 *       Decrement
 *     </button>
 *     <button type="button" onClick={() => setCounter(0)}>
 *       Reset
 *     </button>
 *   </div>
 *   );
 * };
 * ```
 *
 * @see {@link: https://github.com/MKAbuMattar/reactify-svelte#readme}
 */
export const SvelteWrapper = <T extends object>(
  Component: new (props: T & ComponentConstructorOptions<T>) => {
    $set: (props: T) => void;
  },
) => {
  const WrapperComponent = React.memo(SvelteComponent<T>(Component));
  return WrapperComponent;
};
