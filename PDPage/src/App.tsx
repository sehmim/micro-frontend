
import { ErrorBoundary } from 'react-error-boundary';

// Pages
import { ErrorFallback } from './pages/ErrorFallback';
import { initTranslation } from './config/i18n';
import { PDPage } from "./pages/PDPage";

initTranslation()

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <PDPage />
    </ErrorBoundary>
  );
}

export default App;
