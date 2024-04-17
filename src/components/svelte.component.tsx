import { useRef } from 'react';
import { useSvelteComponent } from '../hooks/use-svelte-component.hook';
import type {
  SvelteComponentType,
  ComponentConstructorOptions,
} from '../types';

export const SvelteComponent: SvelteComponentType = <P extends object>(
  Component: new (props: P & ComponentConstructorOptions<P>) => {
    $set: (props: P) => void;
  },
) => {
  return (props: P) => {
    const svelteRef = useRef<HTMLDivElement>(null);

    useSvelteComponent({ Component, props, svelteRef });

    return <div ref={svelteRef} data-type={'reactify-svelte'} />;
  };
};
