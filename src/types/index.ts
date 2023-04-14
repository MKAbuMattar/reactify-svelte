export interface SvelteComponentType {
  <P extends {}>(
    Component: new (...args: any[]) => { $set: (props: P) => void },
  ): (props: P) => JSX.Element;
}
