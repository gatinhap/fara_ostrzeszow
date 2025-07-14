import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import Header from '../header/Header';

const PageLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Outlet />
    </QueryClientProvider>
  );
};

export default PageLayout;
