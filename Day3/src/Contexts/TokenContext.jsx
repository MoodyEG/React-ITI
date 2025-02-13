import { createContext, useEffect, useState } from 'react';

const TokenContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState();

  const checkToken = () => {
    localStorage.getItem('token')
      ? setToken(localStorage.getItem('token'))
      : null;
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenContext };
