import { useRef } from 'react';
import { useSvelteComponent } from '../hooks/useSvelteComponent.hook';
import type { SvelteComponentType } from '../types';

export const SvelteComponent: SvelteComponentType = <P extends {}>(
  Component: new (...args: any[]) => { $set: (props: P) => void },
) => {
  return (props: P) => {
    const svelteRef = useRef<HTMLDivElement>(null);

    useSvelteComponent({ Component, props, svelteRef });

    return <div ref={svelteRef} data-type={'reactify-svelte'} />;
  };
};
