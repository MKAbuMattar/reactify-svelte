import { useLayoutEffect, type RefObject } from 'react';
import type { SvelteComponentProps } from '../types';

export const useSvelteComponent = <P extends object>({
  Component,
  props,
  svelteRef,
}: SvelteComponentProps<P> & {
  svelteRef: RefObject<HTMLDivElement>;
}) => {
  useLayoutEffect(() => {
    while (svelteRef.current?.firstChild) {
      svelteRef.current?.firstChild?.remove();
    }
    new Component({
      target: svelteRef.current,
      props: props,
    });
  }, [Component, props, svelteRef]);
};
