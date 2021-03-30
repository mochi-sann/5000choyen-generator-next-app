import { Box, Image, Input, Button, Text } from "@chakra-ui/react"
import { useForm, Controller } from "react-hook-form"
import React, { useState } from "react"

import Layout from "src/components/Layout"

const Index = () => {
  const [FormDeta, setFormDeta] = useState({
    upperRow: "5000兆円",
    bottomRow: "欲しい！",
  })
  const { register, handleSubmit, watch, errors, control } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setFormDeta(data)
  }

  return (
    <Layout>
      <Box>
        <pre>{JSON.stringify(FormDeta)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text>上段</Text>
          <Controller
            name="upperRow"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <Input onChange={onChange} value={value} placeholder="上段" />
            )}
          />
          <Text>下段</Text>
          <Controller
            name="bottomRow"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <Input onChange={onChange} value={value} placeholder="下段" />
            )}
          />
          <Button type="submit" w="100%" my="2">
            生成
          </Button>
        </form>
      </Box>
      <Box border="2px solid" borderColor="gray.200">
        <Image
          src={`http://5000choyen.app.cyberrex.ml/image?top=${FormDeta.upperRow}&bottom=${FormDeta.bottomRow}`}
        />
      </Box>
      {/* <Hero /> */}
    </Layout>
  )
}

export default Index
