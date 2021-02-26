import React, { createContext, ReactNode, useState } from 'react';

interface User {
  name: string;
  icon: string;
}

interface AuthContextData {
  usersData: User[];
  loggedInUser: User | null;
  token: string | null;
}

export const usersData = [
  {
    name: 'Guest',
    icon:
      'https://occ-0-1543-1356.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71',
  },
  {
    name: 'Kids',
    icon:
      'https://occ-0-1543-1356.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABa7GR6MkFF2LLamF_Ug-LDF6ILAKat4S48-aFh-Hb8SZLYWW2XwVvBo1Tvb0kPylwA5X1okxHU1SJaxhJYtHWYjmUawn.png?r=1b8',
  },
];

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children?: ReactNode;
}
const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ usersData, loggedInUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;
