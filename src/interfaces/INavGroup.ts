import type INavLink from "@/interfaces/INavLink";

export default interface INavGroup {
  type: string; // Link or link-group
  icon: string; // bootstrap icon
  text: string; // nav text
  order: number; // sequence number
  position: string; // top or bottom
  links: INavLink[]; // If link-group can receive a list of nav links
}
