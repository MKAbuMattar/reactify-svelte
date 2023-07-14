import React from 'react';
import { SvelteComponent } from './SvelteComponent';
import type { ComponentConstructorOptions } from '../types';

export const SvelteWrapper = <T extends object>(
  Component: new (props: T & ComponentConstructorOptions<T>) => {
    $set: (props: T) => void;
  },
) => {
  const WrapperComponent = React.memo(SvelteComponent<T>(Component));
  return WrapperComponent;
};
