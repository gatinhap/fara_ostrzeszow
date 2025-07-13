import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { HamburgerMenuWrapper } from './NavigationMobileTrigger.styles';
import { NavigationMenu } from 'radix-ui';

export const NavigationMobileTrigger = () => {
  return (
    <HamburgerMenuWrapper>
      <NavigationMenu.Trigger asChild>
        <HamburgerMenuIcon />
      </NavigationMenu.Trigger>
    </HamburgerMenuWrapper>
  );
};

export default NavigationMobileTrigger;
