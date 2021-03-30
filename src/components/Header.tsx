import React from "react"
import {
  Flex,
  Center,
  Container,
  useColorModeValue,
  Spacer,
  IconButton,
  Link,
} from "@chakra-ui/react"

// import Image from "next/image"

import { ImGithub } from "react-icons/im"
// export interface HeaderProps {

// }

export default function Header() {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      h="55px"
      w="100%"
      top="0"
      left="0"
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("gray.300", "gray.700")}
      // boxShadow="md"
      p="2"
      style={{ backdropFilter: "blur(2px)" }}
      zIndex="100"
    >
      <Container maxW="800px">
        <Flex h="100%">
          <Spacer />
          <Center>
            <Link href="https://github.com/mochi-sann/5000choyen-generator-next-app">
              <IconButton
                aria-label={"Github を開く"}
                icon={<ImGithub size="25" />}
              />
            </Link>
          </Center>
        </Flex>
      </Container>
    </Flex>
  )
}
