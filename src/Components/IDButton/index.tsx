import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton{
  onClick: MouseEventHandler
}

export const DButton = ({onClick}: IDButton) =>{
  return(
    <Button 
      onClick={onClick}
      width='100%' 
      size='md' 
      marginTop='5px' 
      backgroundColor='#85D90F'
    > Entrar
    </Button>
  )
}