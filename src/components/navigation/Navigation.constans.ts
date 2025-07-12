import { StaticTexts } from '../../config/StaticTexts';
import type { NavigationItems } from './Navigation.types';

export const StaticText = StaticTexts.COMPONENTS.NAVIGATION;

const secondLevelAbout = StaticTexts.COMPONENTS.NAVIGATION.SECOND_LEVEL.ABOUT;

const secondLevelSacraments =
  StaticTexts.COMPONENTS.NAVIGATION.SECOND_LEVEL.SACRAMENTS;

export const secondLevelAboutItems: NavigationItems =
  Object.values(secondLevelAbout);

export const secondLevelSacramentsItems: NavigationItems = Object.values(
  secondLevelSacraments,
);
