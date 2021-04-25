import React from 'react';

import {
  Div,
} from '@vkontakte/vkui';

const STYLE = {
  alignItems: 'center',
  display: 'flex',
  height: 'calc(100vh - 120px)',
  justifyContent: 'center',
  marginTop: 60,
  position: 'relative',
};

const MainContent = ({ children }) => <Div style={STYLE}>{children}</Div>;

export default MainContent;
