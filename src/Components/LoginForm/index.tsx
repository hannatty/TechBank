import { ChakraProvider, Box, Center, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../../services/login";
import { DButton } from "../IDButton";

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#000924' padding='25px'>
        <Center>
          <Box
            backgroundColor='#DFDFDF'
            borderRadius='10px'
            padding='15px'
            width='40em'
          >
            <Center marginBottom='5px'> <h1>Acesse sua conta</h1> </Center>
            <Input borderColor='#000000' marginBottom='10px' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}  />
            <Input borderColor='#000000' marginBottom='10px' placeholder='Senha' type='password' />
            <Center>
              <DButton 
                onClick={() => {login(email)}} 
              />
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}

