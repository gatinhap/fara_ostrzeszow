import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import {
  secondLevelAboutItems,
  secondLevelSacramentsItems,
  StaticText,
} from '../navigation/Navigation.constants';
import { HamburgerMenuWrapper } from './NavigationMobileTrigger.styles';
import {
  StyledNavigationMobileCollapsibleContentGroup,
  StyledNavigationMobileContent,
  StyledNavigationMobileItemLink,
  StyledNavigationMobileItemLinkSecondLevel,
  StyledNavigationMobileSubTrigger,
} from './Navigation.mobile.styles';
import { HEADER_PADDING_BLOCK } from '../header/Header.constants';
import { NavLink } from 'react-router';
import { AppPaths } from '../../routes/paths';
import { Collapsible } from 'radix-ui';

const NavigationMobile = () => {
  return (
    <nav>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <HamburgerMenuWrapper>
            <HamburgerMenuIcon />
          </HamburgerMenuWrapper>
        </DropdownMenu.Trigger>

        <StyledNavigationMobileContent
          side="top"
          align="start"
          sideOffset={HEADER_PADDING_BLOCK}
        >
          <DropdownMenu.Sub>
            <Collapsible.Root>
              <Collapsible.Trigger asChild>
                <StyledNavigationMobileSubTrigger>
                  {StaticText.FIRST_LEVEL.ABOUT}

                  <CaretDownIcon aria-hidden />
                </StyledNavigationMobileSubTrigger>
              </Collapsible.Trigger>

              <Collapsible.Content asChild>
                <StyledNavigationMobileCollapsibleContentGroup>
                  {secondLevelAboutItems.map((item, index) => (
                    <StyledNavigationMobileItemLinkSecondLevel
                      asChild
                      key={index}
                    >
                      <NavLink to={'/'}>{item}</NavLink>
                    </StyledNavigationMobileItemLinkSecondLevel>
                  ))}
                </StyledNavigationMobileCollapsibleContentGroup>
              </Collapsible.Content>
            </Collapsible.Root>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <Collapsible.Root>
              <Collapsible.Trigger asChild>
                <StyledNavigationMobileSubTrigger>
                  {StaticText.FIRST_LEVEL.SACRAMENTS}

                  <CaretDownIcon aria-hidden />
                </StyledNavigationMobileSubTrigger>
              </Collapsible.Trigger>

              <Collapsible.Content asChild>
                <StyledNavigationMobileCollapsibleContentGroup>
                  {secondLevelSacramentsItems.map((item, index) => (
                    <StyledNavigationMobileItemLinkSecondLevel
                      asChild
                      key={index}
                    >
                      <NavLink to={'/'}>{item}</NavLink>
                    </StyledNavigationMobileItemLinkSecondLevel>
                  ))}
                </StyledNavigationMobileCollapsibleContentGroup>
              </Collapsible.Content>
            </Collapsible.Root>
          </DropdownMenu.Sub>

          <StyledNavigationMobileItemLink asChild>
            <NavLink to={AppPaths.Office}>
              {StaticText.FIRST_LEVEL.OFFICE}
            </NavLink>
          </StyledNavigationMobileItemLink>

          <StyledNavigationMobileItemLink asChild>
            <NavLink to={AppPaths.Announcements}>
              {StaticText.FIRST_LEVEL.ANNOUNCEMENTS}
            </NavLink>
          </StyledNavigationMobileItemLink>

          <StyledNavigationMobileItemLink asChild>
            <NavLink to={AppPaths.Intentions}>
              {StaticText.FIRST_LEVEL.INTENTIONS}
            </NavLink>
          </StyledNavigationMobileItemLink>

          <StyledNavigationMobileItemLink asChild>
            <NavLink to={AppPaths.Gallery}>
              {StaticText.FIRST_LEVEL.GALLERY}
            </NavLink>
          </StyledNavigationMobileItemLink>

          <StyledNavigationMobileItemLink asChild>
            <NavLink to={AppPaths.Contact}>
              {StaticText.FIRST_LEVEL.CONTACT}
            </NavLink>
          </StyledNavigationMobileItemLink>
        </StyledNavigationMobileContent>
      </DropdownMenu.Root>
    </nav>
  );
};

export default NavigationMobile;
