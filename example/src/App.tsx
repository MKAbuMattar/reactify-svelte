import { HTMLAttributes, useState } from 'react';
import { SvelteWrapper } from 'reactify-svelte';
import Hello__SvelteComponent__ from './components/Hello.svelte';

type SvelteProps = HTMLAttributes<HTMLDivElement> & {
  txt: string;
  counter: number;
};

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
