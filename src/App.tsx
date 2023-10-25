import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './routes';
import { theme } from "./styles/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}
