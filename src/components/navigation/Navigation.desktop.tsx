import { CaretDownIcon } from '@radix-ui/react-icons';
import { NavigationMenu } from 'radix-ui';
import {
  StaticText,
  secondLevelAboutItems,
  secondLevelSacramentsItems,
} from './Navigation.constants';
import {
  StyledNavigationList,
  StyledNavigationItemExpandable,
  StyledNavigationTrigger,
  StyledNavigationContent,
  StyledNavigationLinkSecondLevel,
  StyledNavigationLink,
} from './Navigation.styles';
import { NavLink } from 'react-router';
import { AppPaths } from '../../routes/paths';

const NavigationDesktop = () => {
  return (
    <NavigationMenu.Root data-orientation="horizontal">
      <StyledNavigationList>
        <StyledNavigationItemExpandable>
          <StyledNavigationTrigger>
            {StaticText.FIRST_LEVEL.ABOUT}
            <CaretDownIcon aria-hidden />
          </StyledNavigationTrigger>
          <StyledNavigationContent>
            {secondLevelAboutItems.map((item, index) => (
              <StyledNavigationLinkSecondLevel key={index}>
                {item}
              </StyledNavigationLinkSecondLevel>
            ))}
          </StyledNavigationContent>
        </StyledNavigationItemExpandable>

        <StyledNavigationItemExpandable>
          <StyledNavigationTrigger>
            {StaticText.FIRST_LEVEL.SACRAMENTS}
            <CaretDownIcon aria-hidden />
          </StyledNavigationTrigger>
          <StyledNavigationContent>
            {secondLevelSacramentsItems.map((item, index) => (
              <StyledNavigationLinkSecondLevel key={index}>
                {item}
              </StyledNavigationLinkSecondLevel>
            ))}
          </StyledNavigationContent>
        </StyledNavigationItemExpandable>

        <NavigationMenu.Item>
          <StyledNavigationLink asChild>
            <NavLink to={AppPaths.Office}>
              {StaticText.FIRST_LEVEL.OFFICE}
            </NavLink>
          </StyledNavigationLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <StyledNavigationLink asChild>
            <NavLink to={AppPaths.Announcements}>
              {StaticText.FIRST_LEVEL.ANNOUNCEMENTS}
            </NavLink>
          </StyledNavigationLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <StyledNavigationLink asChild>
            <NavLink to={AppPaths.Intentions}>
              {StaticText.FIRST_LEVEL.INTENTIONS}
            </NavLink>
          </StyledNavigationLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <StyledNavigationLink asChild>
            <NavLink to={AppPaths.Gallery}>
              {StaticText.FIRST_LEVEL.GALLERY}
            </NavLink>
          </StyledNavigationLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <StyledNavigationLink asChild>
            <NavLink to={AppPaths.Contact}>
              {StaticText.FIRST_LEVEL.CONTACT}
            </NavLink>
          </StyledNavigationLink>
        </NavigationMenu.Item>
      </StyledNavigationList>
    </NavigationMenu.Root>
  );
};

export default NavigationDesktop;
