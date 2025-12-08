import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
