'use client'

import { ChakraProvider, Box } from "@chakra-ui/react"



export default function About() {
    return (
        <ChakraProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <a href='/'>Home</a>
                <div>About Me</div>



                <Box bg='tomato' w='100%' p={4} color='white'>
                This is the Box
                </Box>

            </main>
        </ChakraProvider>
    )
}

