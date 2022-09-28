import { React, useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {

  const [user, setUser] = useState({name: '', auth: false});

  const login = (user) => {
    setUser({name: user.username, auth: true});
  }

  const logout = () => {
    setUser({name: '', auth: false});
  }

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );

}