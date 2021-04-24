import React from 'react';
import ReactDOM from 'react-dom';
import {
  AdaptivityProvider,
  ConfigProvider,
} from '@vkontakte/vkui';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider scheme="space_gray">
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
