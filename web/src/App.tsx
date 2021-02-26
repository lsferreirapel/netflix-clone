import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles, { Container } from './styles/global';

import AuthProvider from './context/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </Container>
  );
};

export default App;
