import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";


type MainContentProps = {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  const location = useLocation()

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      bg="blue.50"
    >
      <Flex
        align="center"
        w={{md: "40%", lg: "30%"}}
        h="90%"
        bg="white"
        position="absolute"
        borderRadius={10}
        boxShadow="0px 0px 10px 2px 	#696969"
      >
        <Flex
          w="100%"
          h="100%"
          justify="center"
          align="center"
          position="absolute"
          overflow="auto"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}