export interface SvelteComponentProps<ComponentProps> {
  Component: new (...args: any[]) => { $set: (props: ComponentProps) => void };
  props: ComponentProps;
}

export interface SvelteComponentType {
  <P extends {}>(
    Component: new (...args: any[]) => { $set: (props: P) => void },
  ): (props: P) => JSX.Element;
}
