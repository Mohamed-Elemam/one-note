import { ReactNode, createContext, useState } from "react";

interface NoteContextProps {
  title: string;
  description: string;
  setNote?: React.Dispatch<React.SetStateAction<NoteContextProps>>;
}
const NoteContext = createContext<NoteContextProps>({
  title: "",
  description: "",
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [note, setNote] = useState<NoteContextProps>({
    title: "",
    description: "",
  });
  return (
    <NoteContext.Provider value={{ ...note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default AuthProvider;
