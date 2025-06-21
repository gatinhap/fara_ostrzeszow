import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/navigation/Navigation.desktop';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
