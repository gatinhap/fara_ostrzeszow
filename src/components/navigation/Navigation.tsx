import { NavigationMenu } from 'radix-ui';
import { CaretDownIcon } from '@radix-ui/react-icons';

import {
  secondLevelAboutItems,
  secondLevelSacramentsItems,
  StaticText,
} from './Navigation.constans';

import {
  StyledNavigationContent,
  StyledNavigationItem,
  StyledNavigationItemExpandable,
  StyledNavigationLink,
  StyledNavigationLinkSecondLevel,
  StyledNavigationList,
  StyledNavigationTrigger,
} from './Navigation.styles';
import { useViewport } from '../../utils/hooks/useViewport';
import NavigationMobileTrigger from '../navigationMobileTrigger/NavigationMobileTrigger';

const Navigation = () => {
  const viewport = useViewport();
  const isDesktop = viewport === 'desktop';

  if (isDesktop) {
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

          <StyledNavigationItem>
            <StyledNavigationLink>
              {StaticText.FIRST_LEVEL.OFFICE}
            </StyledNavigationLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledNavigationLink>
              {StaticText.FIRST_LEVEL.ANNOUNCEMENTS}
            </StyledNavigationLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledNavigationLink>
              {StaticText.FIRST_LEVEL.INTENTIONS}
            </StyledNavigationLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledNavigationLink>
              {StaticText.FIRST_LEVEL.GALLERY}
            </StyledNavigationLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledNavigationLink>
              {StaticText.FIRST_LEVEL.CONTACT}
            </StyledNavigationLink>
          </StyledNavigationItem>
        </StyledNavigationList>
      </NavigationMenu.Root>
    );
  }

  return (
    <NavigationMenu.Root data-orientation="vertical">
      <NavigationMenu.Item>
        <NavigationMobileTrigger />

        <NavigationMenu.Content>
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

            <StyledNavigationItem>
              <StyledNavigationLink>
                {StaticText.FIRST_LEVEL.OFFICE}
              </StyledNavigationLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledNavigationLink>
                {StaticText.FIRST_LEVEL.ANNOUNCEMENTS}
              </StyledNavigationLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledNavigationLink>
                {StaticText.FIRST_LEVEL.INTENTIONS}
              </StyledNavigationLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledNavigationLink>
                {StaticText.FIRST_LEVEL.GALLERY}
              </StyledNavigationLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledNavigationLink>
                {StaticText.FIRST_LEVEL.CONTACT}
              </StyledNavigationLink>
            </StyledNavigationItem>
          </StyledNavigationList>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
};

export default Navigation;
