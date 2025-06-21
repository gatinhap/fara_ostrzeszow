import { NavigationMenu } from 'radix-ui';
import { CaretDownIcon } from '@radix-ui/react-icons';

import { StaticText } from './Navigation.constans';

import './Navigation.css';

const Navigation = () => {
  return (
    <NavigationMenu.Root className="navigation-root">
      <NavigationMenu.List className="navigation-list">
        <NavigationMenu.Item className="navigation-item navigation-item_expandable">
          <NavigationMenu.Trigger className="navigation-trigger">
            {StaticText.FIRST_LEVEL.ABOUT}
            <CaretDownIcon className="navigation-trigger_icon" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            data-orientation="vertical"
            className="navigation-content"
          >
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item navigation-item_expandable">
          <NavigationMenu.Trigger className="navigation-trigger">
            {StaticText.FIRST_LEVEL.SACRAMENTS}
            <CaretDownIcon className="navigation-trigger_icon" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className="navigation-content"
            data-orientation="vertical"
          >
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
            <NavigationMenu.Link className="navigation-link">
              LOREM IPSUM
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item">
          <NavigationMenu.Link className="navigation-link">
            {StaticText.FIRST_LEVEL.OFFICE}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item">
          <NavigationMenu.Link className="navigation-link">
            {StaticText.FIRST_LEVEL.ANNOUNCEMENTS}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item">
          <NavigationMenu.Link className="navigation-link">
            {StaticText.FIRST_LEVEL.INTENTIONS}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item">
          <NavigationMenu.Link className="navigation-link">
            {StaticText.FIRST_LEVEL.GALLERY}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="navigation-item">
          <NavigationMenu.Link className="navigation-link">
            {StaticText.FIRST_LEVEL.CONTACT}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navigation;
