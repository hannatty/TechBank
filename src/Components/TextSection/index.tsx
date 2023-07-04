import { Center, Heading } from "@chakra-ui/react";

export const TextSection = () => {
  return(
    <Center backgroundColor='#000924' marginBottom='2em'>
          <Heading 
            size='lg' 
            fontSize='50px' 
            backgroundColor='#000924' 
            color='#FFF'
            fontFamily= "'Roboto', sans-serif"
            >
            Potencialize sua carreira. Realize seus objetivos. <br/>
            Tech Bank: seu parceiro financeiro na era digital.
          </Heading>
    </Center>
  );
}