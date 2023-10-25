import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContent } from "../components/MainContent";
import { AssuntoProvider } from "../context/AssuntoContext";
import { UsuarioProvider } from "../context/UsuarioContext";
import { Login } from "../pages/Login";
import { Quiz } from "../pages/Quiz";
import { Ranking } from "../pages/Ranking";


export function Main() {
  return (
    <BrowserRouter>
      <AssuntoProvider>
        <UsuarioProvider>
          <MainContent>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/ranking" element={<Ranking />} />
            </Routes>
          </MainContent>
        </UsuarioProvider>
      </AssuntoProvider>
    </BrowserRouter>
  )
}