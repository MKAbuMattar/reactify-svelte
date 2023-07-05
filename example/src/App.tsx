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
