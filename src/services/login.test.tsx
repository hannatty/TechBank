import { login } from "./login"

const mockEmail = 'user@email.com'

describe('login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert informando sucesso do cadastro.', () => {
    login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`${mockEmail} cadastrado com sucesso!`)
  })

  it('Não deve exibir mensagem sem email cadastrado.', () => {
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('cadastrado com sucesso!')
  } )

})



//toHaveBeenCalledWith