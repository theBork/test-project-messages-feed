export interface TabItem<T extends string = string> {
  value: T;
  title?: string;
  onClick: () => void;
}
