import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"
import { Controller } from "react-hook-form"

interface CheckBoxProps {
  control: any
  name: string
}

const CheckBox = ({ control, name }: CheckBoxProps) => {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        defaultValue="100"
        render={({ onChange, value }) => (
          <Flex>
            <NumberInput
              maxW="100px"
              mr="2rem"
              value={value}
              onChange={onChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider
              mr="4"
              flex="1"
              focusThumbOnChange={false}
              value={value}
              onChange={onChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="32px">
                {value}
              </SliderThumb>
            </Slider>
          </Flex>
        )}
      />
    </Box>
  )
}

export default CheckBox
