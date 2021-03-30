import { Heading, Icon } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"

import Layout from "src/components/Layout"

const Index = () => (
  <Layout>
    {/* <Hero /> */}

    <Heading>
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      <Icon as={FaReact} w={10} h={10} color="#0693E3" />
    </Heading>
  </Layout>
)

export default Index
