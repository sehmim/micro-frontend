
import { ErrorBoundary } from 'react-error-boundary';

// Pages
import { ErrorFallback } from './pages/ErrorFallback';
import { initTranslation } from './config/i18n';
import { Home } from "./pages/Home";

initTranslation()

function App({ history }: { history?: History }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <Home history={history} />
    </ErrorBoundary>
  );
}

export default App;
