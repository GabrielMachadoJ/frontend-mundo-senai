import { createContext, ReactNode, useState } from "react";

interface IAssunto {
  idAssuntoEscolhido: number;
  setIdAssuntoEscolhido: (value: React.SetStateAction<any>) => void;
  setAssuntoEscolhido: (value: React.SetStateAction<any>) => void;
  assuntoEscolhido: string;
}
type AssuntoProviderProps = {
  children: ReactNode
}
export const AssuntoContext = createContext({} as IAssunto)

export function AssuntoProvider({children}: AssuntoProviderProps) {
  const [idAssuntoEscolhido, setIdAssuntoEscolhido] = useState<number>(0);
  const [assuntoEscolhido, setAssuntoEscolhido] = useState<string>("");

  return (
    <AssuntoContext.Provider value={{assuntoEscolhido, setAssuntoEscolhido, idAssuntoEscolhido, setIdAssuntoEscolhido}}>
      {children}
    </AssuntoContext.Provider>
  )
}