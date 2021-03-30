import { Box, Image, Input, Button, Text, Checkbox } from "@chakra-ui/react"
import { useForm, Controller } from "react-hook-form"
import React, { useState } from "react"

import Layout from "src/components/Layout"

const Index = () => {
  const [FormDeta, setFormDeta] = useState({
    upperRow: "5000兆円",
    bottomRow: "欲しい！",
    noalpha: false,
    rainbow: false,
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
          <Box>
            <Text>上段</Text>
            <Controller
              name="upperRow"
              control={control}
              defaultValue="5000兆円"
              render={({ onChange, value }) => (
                <Input onChange={onChange} value={value} placeholder="上段" />
              )}
            />
          </Box>
          <Box>
            <Text>下段</Text>
            <Controller
              name="bottomRow"
              control={control}
              defaultValue="欲しい！"
              render={({ onChange, value }) => (
                <Input onChange={onChange} value={value} placeholder="下段" />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="noalpha"
              control={control}
              render={(props) => (
                <Checkbox
                  onChange={(e) => props.onChange(e.target.checked)}
                  checked={props.value}
                >
                  不透明化
                </Checkbox>
              )}
            />
          </Box>
          <Box>
            <Controller
              name="rainbow"
              control={control}
              render={(props) => (
                <Checkbox
                  onChange={(e) => props.onChange(e.target.checked)}
                  checked={props.value}
                >
                  虹色にする
                </Checkbox>
              )}
            />
          </Box>
          <Box>
            <Controller
              name="single"
              control={control}
              render={(props) => (
                <Checkbox
                  onChange={(e) => props.onChange(e.target.checked)}
                  checked={props.value}
                >
                  虹色にする
                </Checkbox>
              )}
            />
          </Box>

          <Button type="submit" w="100%" my="2">
            生成
          </Button>
        </form>
      </Box>
      <Box border="2px solid" borderColor="gray.200">
        <Image
          src={`http://5000choyen.app.cyberrex.ml/image?top=${FormDeta.upperRow}&bottom=${FormDeta.bottomRow}&noalpha=${FormDeta.noalpha}&rainbow=${FormDeta.rainbow}`}
        />
      </Box>
      {/* <Hero /> */}
    </Layout>
  )
}

export default Index
