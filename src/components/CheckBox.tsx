import { Box, Checkbox } from "@chakra-ui/react"
import { Controller } from "react-hook-form"

interface CheckBoxProps {
  control: any
  name: string
  text: string
}

const CheckBox = ({ control, name, text }: CheckBoxProps) => {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={(props) => (
          <Checkbox
            p="1"
            onChange={(e) => props.onChange(e.target.checked)}
            checked={props.value}
          >
            {text}
          </Checkbox>
        )}
      />
    </Box>
  )
}

export default CheckBox
