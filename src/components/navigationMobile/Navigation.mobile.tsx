import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import {
  secondLevelAboutItems,
  secondLevelSacramentsItems,
  StaticText,
} from '../navigation/Navigation.constants';
import { HamburgerMenuWrapper } from './NavigationMobileTrigger.styles';
import { StyledNavigationMobileContent } from './Navigation.mobile.styles';
import { HEADER_PADDING_BLOCK } from '../header/Header.constants';

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
            <DropdownMenu.SubTrigger asChild>
              <a>
                {StaticText.FIRST_LEVEL.ABOUT} <CaretDownIcon aria-hidden />
              </a>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              {secondLevelAboutItems.map((item, index) => (
                <DropdownMenu.Item asChild key={index}>
                  <a>{item}</a>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger asChild>
              <a>
                {StaticText.FIRST_LEVEL.SACRAMENTS}
                <CaretDownIcon aria-hidden />
              </a>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              {secondLevelSacramentsItems.map((item, index) => (
                <DropdownMenu.Item asChild key={index}>
                  <a>{item}</a>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Item>
            <a>{StaticText.FIRST_LEVEL.OFFICE}</a>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <a>{StaticText.FIRST_LEVEL.ANNOUNCEMENTS}</a>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <a>{StaticText.FIRST_LEVEL.INTENTIONS}</a>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <a>{StaticText.FIRST_LEVEL.GALLERY}</a>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <a>{StaticText.FIRST_LEVEL.CONTACT}</a>
          </DropdownMenu.Item>
        </StyledNavigationMobileContent>
      </DropdownMenu.Root>
    </nav>
  );
};

export default NavigationMobile;
