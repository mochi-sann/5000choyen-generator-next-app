import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

import theme from "src/lib/theme"
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href=""/> */}
          <link rel="icon" href="/icon.png" type="image/x-icon" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
