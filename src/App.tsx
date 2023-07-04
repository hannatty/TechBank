import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Layout } from './Layout';
import { LoginForm } from './Components/LoginForm';
import { TextSection } from './Components/TextSection';


function App() {
  return (
    <ChakraProvider>
      <Box backgroundColor= '#000924'>
        <Layout>
          <TextSection />
          <LoginForm />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
