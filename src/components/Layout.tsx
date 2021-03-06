import React, { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"
// import NextLink from "next/link"
import Head from "next/head"

import Header from "~/src/components/Header"

interface Props {
  children?: ReactNode
  title?: string
  HiidenHeader?: boolean
}

const Layout = ({
  children,
  title = "5000兆円画像生成",
  HiidenHeader = false,
}: Props) => {
  // const { colorMode } = useColorMode()
  return (
    <Box minHeight="100vh">
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <title>{title}</title>
      </Head>
      {HiidenHeader ? null : <Header />}

      {/* 本文 */}
      <Container maxW="800px">{children}</Container>
    </Box>
  )
}
export default Layout
