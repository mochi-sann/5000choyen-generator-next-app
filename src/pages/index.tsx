import {
  Box,
  Image,
  Input,
  Button,
  Text,
  Link,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import { useForm, Controller } from "react-hook-form"
import React, { useState } from "react"

import Layout from "src/components/Layout"
import CheckBoxComp from "src/components/CheckBox"

const Index = () => {
  const [FormDeta, setFormDeta] = useState({
    upperRow: "5000兆円",
    bottomRow: "欲しい！",
    noalpha: false,
    rainbow: false,
    single: false,
    type: "png",
  })
  const { handleSubmit, control, register } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setFormDeta(data)
  }

  return (
    <Layout>
      <Box>
        {/* <pre>{JSON.stringify(FormDeta)}</pre> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box py="2">
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
          <Box py="2">
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
          <Box py="2">
            <Text>画像形式</Text>
            <Controller
              name="type"
              control={control}
              defaultValue="png"
              render={({ onChange, value }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="row">
                    <Radio value="png">PNG</Radio>
                    <Radio value="jpeg">JPEG</Radio>
                    <Radio value="webp">WebP</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </Box>

          <CheckBoxComp name="noalpha" text="不透明化" control={control} />
          <CheckBoxComp name="rainbow" text="虹色にする" control={control} />
          {/* <CheckBoxComp
            name="single"
            text="最初の文字だけ表示"
            control={control}
          /> */}

          <Button type="submit" w="100%" my="2">
            生成
          </Button>
        </form>
      </Box>

      <Image
        border="2px solid"
        borderColor="gray.200"
        src={`${process.env.NEXT_PUBLIC_API_URL}/image?top=${FormDeta.upperRow}&bottom=${FormDeta.bottomRow}&noalpha=${FormDeta.noalpha}&rainbow=${FormDeta.rainbow}&type=${FormDeta.type}`}
      />

      <Box>
        <Text></Text>
      </Box>
      {/* <Hero /> */}
    </Layout>
  )
}

export default Index
