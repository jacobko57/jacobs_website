'use client'

import Home from '.'

import { ChakraProvider, Center } from '@chakra-ui/react'

export default function Page() {
  return (
    <ChakraProvider>
      <Home></Home>
    </ChakraProvider>
  )
}
