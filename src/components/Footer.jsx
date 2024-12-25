import { Center, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Center p={3}>
          <HStack
            pos={"absolute"}
            bottom={0}
            fontSize="small"
            pt={2}
          >
            <Text  opacity={0.6}>
              {" "}
              &copy;2024 | All right reserved{" "}
            </Text>
          </HStack>
        </Center>
  )
}
