import { Navigate, Route, Routes } from 'react-router';
import { AppPaths } from './paths';
import AnnouncementPage from '../pages/announcements/AnnouncementPage';
import ChurchesPage from '../pages/churches/ChurchesPage';
import ContactPage from '../pages/contact/ContactPage';
import GalleryPage from '../pages/gallery/GalleryPage';
import IntentionsPage from '../pages/intentions/IntentionsPage';
import MinistriesPage from '../pages/ministries/MinistriesPage';
import OfficePage from '../pages/office/OfficePage';
import PriestsPage from '../pages/priests/PriestsPage';
import SacramentsPage from '../pages/sacraments/SacramentsPage';
import SaintMaximilianPage from '../pages/saintMaximilian/SaintMaximilianPage';
import HomePage from '../pages/homePage/HomePage';
import PageLayout from '../components/pageLayout/PageLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path={AppPaths.Churches} element={<ChurchesPage />} />
        <Route path={AppPaths.Priests} element={<PriestsPage />} />
        <Route path={AppPaths.Ministries} element={<MinistriesPage />} />
        <Route path={AppPaths.StMaximilian} element={<SaintMaximilianPage />} />
        <Route path={AppPaths.Contact} element={<ContactPage />} />
        <Route path={AppPaths.Sacraments} element={<SacramentsPage />} />
        <Route path={AppPaths.Office} element={<OfficePage />} />
        <Route path={AppPaths.Announcements} element={<AnnouncementPage />} />
        <Route path={AppPaths.Intentions} element={<IntentionsPage />} />
        <Route path={AppPaths.Gallery} element={<GalleryPage />} />
      </Route>

      <Route path="*" element={<Navigate to={AppPaths.Home} replace />} />
    </Routes>
  );
};

export default AppRoutes;
