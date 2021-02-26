import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container, LoginBox, Icons, Icon } from './styles';

// import components
// import { Header } from '../../components';

const Login: React.FC = () => {
  const { usersData } = useContext(AuthContext);

  return (
    <Container>
      {/* <header></header> */}
      <LoginBox>
        <h1>Who's watching?</h1>
        <Icons>
          {usersData.map((user) => (
            <Icon key={user.name}>
              <img src={user.icon} alt={user.name} />
              <span>{user.name}</span>
            </Icon>
          ))}
        </Icons>
      </LoginBox>
    </Container>
  );
};

export default Login;
