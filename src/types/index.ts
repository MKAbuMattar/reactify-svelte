export type ComponentConstructorOptions<
  Props extends Record<string, any> = Record<string, any>,
> = {
  target: Element | Document | ShadowRoot;
  anchor?: Element;
  props?: Props;
  context?: Map<any, any>;
  hydrate?: boolean;
  intro?: boolean;
  $$inline?: boolean;
};

export type SvelteComponentProps<ComponentProps> = {
  Component: new (...args: any[]) => { $set: (props: ComponentProps) => void };
  props: ComponentProps;
};

export type SvelteComponentType = <P extends object>(
  Component: new (props: P & ComponentConstructorOptions<P>) => {
    $set: (props: P) => void;
  },
) => (props: P) => JSX.Element;
