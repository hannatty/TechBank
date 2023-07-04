import { ChakraProvider, Box, Center, Input, Button } from "@chakra-ui/react";
import { login } from "../../services/login";

export const LoginForm = () => {
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
            <Input borderColor='#000000' marginBottom='10px' placeholder='Email' />
            <Input borderColor='#000000' marginBottom='10px' placeholder='Senha' type='password' />
            <Center>
              <Button 
                onClick={login} 
                width='100%' 
                size='md' 
                marginTop='5px' 
                backgroundColor='#85D90F'
              >
                Entrar
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}

