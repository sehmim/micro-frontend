import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { configStore } from './config/store';

export const store = configStore()



function MyApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}


// render micro frontend function
(window as any).renderPDPage = (containerId: string) => {
  ReactDOM.render(
    <MyApp />,
    document.getElementById(containerId)
  );
};

// unmount micro frontend function
(window as any).unmountPDPage = (containerId: string) => {
  ReactDOM.unmountComponentAtNode((document as any).getElementById(containerId));
};


// Mount to root if it is not a micro frontend
if (!document.getElementById('PDPage-container')) {
  ReactDOM.render(<MyApp />, document.getElementById('root'));
}

