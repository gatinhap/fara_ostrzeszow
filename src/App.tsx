import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
};

export default App;
