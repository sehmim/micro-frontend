import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { configStore } from './config/store';

export const store = configStore()



function MyApp({ history }: { history?: History }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App history={history} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}


// render micro frontend function
(window as any).renderProducts = (containerId: string, history: History) => {
  ReactDOM.render(
    <MyApp history={history} />,
    document.getElementById(containerId)
  );
};

// unmount micro frontend function
(window as any).unmountProducts = (containerId: string) => {
  ReactDOM.unmountComponentAtNode((document as any).getElementById(containerId));
};


// Mount to root if it is not a micro frontend
if (!document.getElementById('Products-container')) {
  ReactDOM.render(<MyApp />, document.getElementById('root'));
}

