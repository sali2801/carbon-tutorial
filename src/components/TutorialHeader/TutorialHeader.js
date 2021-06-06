import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  Settings20,
  UserAvatar20,
  Help20,
  Dashboard32,
  Analytics32,
  ChartVennDiagram32,
  Concept32,
  Data_132,
  Lightning32,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Maximo">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          Maximo
        </HeaderName>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
          <SideNavItems>
            <SideNavLink
              element={Link}
              to="/"
              renderIcon={Dashboard32}
              Dashboard32>
              Dashboards
            </SideNavLink>

            <SideNavMenu renderIcon={Data_132} title="Work Queues">
              <SideNavMenuItem element={Link} to="/" Dashboard32>
                Queue A
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/" Dashboard32>
                Queue B
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/" Dashboard32>
                Queue C
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={ChartVennDiagram32} title="Items">
              <SideNavMenuItem element={Link} to="/" ChartVennDiagram32>
                Item 1
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/" ChartVennDiagram32>
                Item 2
              </SideNavMenuItem>
              <SideNavMenuItem element={Link} to="/" ChartVennDiagram32>
                Item 3
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink element={Link} to="/" renderIcon={Concept32} Concept32>
              Workflow
            </SideNavLink>
            <SideNavLink
              aria-current="page"
              renderIcon={Analytics32}
              Analytics32
              element={Link}
              to="/reports">
              Reports
            </SideNavLink>
            <SideNavLink
              element={Link}
              to="/"
              renderIcon={Lightning32}
              Dashboard32>
              Alert Console
            </SideNavLink>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Settings">
            <Settings20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Help">
            <Help20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
