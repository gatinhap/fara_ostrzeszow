import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient} />;
};

export default App;
