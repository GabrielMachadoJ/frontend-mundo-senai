import { Divider, Flex, Image, Text } from "@chakra-ui/react";

import quiz from "../../assets/quiz.png"
import { StartPlay } from "./Form";

export function Login() {
  return (
    <>
      <Flex
        h="100%"
        p="4"
        justify="center"
        align="center"
        direction="column"
      >
        <StartPlay />
      </Flex>
    </>
  )
}