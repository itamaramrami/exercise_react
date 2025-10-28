import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  return (
    <UserContext.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
