
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'

// Pages
import { ErrorFallback } from '../src/pages/ErrorFallback'
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { PDP } from "./pages/PDP";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile";

function App() {

  const [isAuthenticated, setAuthenticated] = useState(true)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pdp">
            <Route path=":id" element={<PDP />} />
          </ Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {isAuthenticated && <PrivateRoutes />}
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
    </Routes>)
}

export default App;
