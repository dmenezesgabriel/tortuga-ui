export default interface INavLink {
  type: string; // Link
  icon: string; // bootstrap icon
  text: string; // nav text
  tag?: string; // tag
  to: string; // route address
  order: number; // sequence number
  position?: string; // top or bottom
  isDisabled: boolean;
}
