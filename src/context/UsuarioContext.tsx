import { createContext, ReactNode, useState } from "react";

interface IUsuario {
  nomeDoUsuario: string;
  setNomeDoUsuario: (value: React.SetStateAction<any>) => void;
  pontuacaoDoUsuario: number;
  setPontuacaoDoUsuario: (value: React.SetStateAction<any>) => void;
}

type UsuarioProviderProps = {
  children: ReactNode
}
export const UsuarioContext = createContext({} as IUsuario)

export function UsuarioProvider({children}: UsuarioProviderProps) {
  const [nomeDoUsuario, setNomeDoUsuario] = useState<string>("");
  const [pontuacaoDoUsuario, setPontuacaoDoUsuario] = useState<number>(0);

  return (
    <UsuarioContext.Provider value={{pontuacaoDoUsuario, setPontuacaoDoUsuario, nomeDoUsuario, setNomeDoUsuario}}>
      {children}
    </UsuarioContext.Provider>
  )
}