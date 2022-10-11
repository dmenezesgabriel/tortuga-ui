import type { Story } from "@storybook/vue3";
import SideBar from "@/components/sideBar/Sidebar.vue";
import SideBarNav from "@/components/sideBar/SidebarNav.vue";
import SideBarNavItem from "@/components/sideBar/SidebarNavItem.vue";
import SideBarNavLink from "@/components/sideBar/SidebarNavLink.vue";

export default {
  title: "Components/SideBar/SideBar",
  component: { SideBar },
  subcomponents: { SideBarNav, SideBarNavItem, SideBarNavLink },
  decorators: [
    () => ({
      template: "<div style='height: 100%; width: 100%'><story /></div>",
    }),
  ],
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
  },
};

const Template: Story = (args: any, { argTypes }) => ({
  components: { SideBar, SideBarNav, SideBarNavItem, SideBarNavLink },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
        <SideBar v-bind='args'>
          <SideBarNav>
            <SideBarNavItem>
              <SideBarNavLink>
                Hello
              </SideBarNavLink>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                Hello
              </SideBarNavLink>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                Hello
              </SideBarNavLink>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                Hello
              </SideBarNavLink>
            </SideBarNavItem>
          </SideBarNav>
        </SideBar>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {};
