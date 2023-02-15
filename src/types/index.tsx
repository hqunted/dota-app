export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
}
export interface TabItem {
  title: string;
}
export interface questionmarkProp {
  visible: Visibility.VISIBLE;
  invisible: Visibility.INVISIBLE;
}
export enum Visibility {
  VISIBLE = "opacity-100",
  INVISIBLE = "opacity-0",
}
