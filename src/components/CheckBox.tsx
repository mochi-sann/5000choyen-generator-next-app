import { Box, Image, Input, Button, Text, Checkbox } from "@chakra-ui/react"
import { Controller } from "react-hook-form"

const CheckBox = (control, name: string, text: string) => {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={(props) => (
          <Checkbox
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
