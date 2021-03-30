import React from "react"
import {
  Flex,
  Box,
  Center,
  Heading,
  Container,
  useColorModeValue,
  Spacer,
  IconButton,
  PositionProps,
  Link,
} from "@chakra-ui/react"
import NextLink from "next/link"
// import Image from "next/image"

import { ImGithub } from "react-icons/im"
// export interface HeaderProps {

// }

export default function Header({ position = "sticky" }: PositionProps) {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      h="55px"
      position={position}
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
          <NextLink href="/">
            <a>
              <Box h="100%">
                <Center h="100%">
                  <Heading as="h1" fontSize="4xl">
                    5000兆円生成器
                  </Heading>
                </Center>
              </Box>
            </a>
          </NextLink>
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
