import { Box, Image, Input, Button, Text } from "@chakra-ui/react"
import { useForm, Controller } from "react-hook-form"

import Layout from "src/components/Layout"

const Index = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Layout>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text>上段</Text>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <Input onChange={onChange} value={value} placeholder="上段" />
            )}
          />
          <Text>下段</Text>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <Input onChange={onChange} value={value} placeholder="下段" />
            )}
          />
          {/* <Controller
            name="iceCreamType"
            control={control}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            as={Select}
          /> */}
          <Button type="submit" w="100%" my="2">
            生成
          </Button>
        </form>
      </Box>
      <Box border="2px solid" borderColor="gray.200">
        <Image src="http://5000choyen.app.cyberrex.ml/image?top=5000兆円&bottom=欲しい!" />
      </Box>
      {/* <Hero /> */}
    </Layout>
  )
}

export default Index
