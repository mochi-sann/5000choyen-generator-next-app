import { Box, Image, Input, Button, Text, Link } from "@chakra-ui/react"
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
  })
  const { handleSubmit, control } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setFormDeta(data)
  }

  return (
    <Layout>
      <Box>
        {/* <pre>{JSON.stringify(FormDeta)}</pre> */}
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
        src={`http://5000choyen.app.cyberrex.ml/image?top=${FormDeta.upperRow}&bottom=${FormDeta.bottomRow}&noalpha=${FormDeta.noalpha}&rainbow=${FormDeta.rainbow}`}
      />

      {/* <Hero /> */}
    </Layout>
  )
}

export default Index
