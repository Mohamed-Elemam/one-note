import { ReactNode, createContext, useState, useEffect } from "react";

interface AuthContextProps {
  userId: string;
  userName: string;
  userToken: string;
  setUser?: React.Dispatch<React.SetStateAction<AuthContextProps>>;
}
export const AuthContext = createContext<AuthContextProps>({
  userId: "",
  userName: "",
  userToken: "",
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextProps>({
    userId: "",
    userName: "",
    userToken: "",
  });
  useEffect(() => {
    const user = sessionStorage.getItem("userData");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
