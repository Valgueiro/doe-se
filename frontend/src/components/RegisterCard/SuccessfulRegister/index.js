import { Container, SuccessText, BackToHomeText } from './styles'
import Link from 'next/link'

const SuccessfulRegister = () => {
  return (
    <Container>
      <SuccessText>Cadastro realizado com sucesso</SuccessText>
      <Link href="/">
        <BackToHomeText>Voltar para página inicial</BackToHomeText>
      </Link>
    </Container>
  )
}

export default SuccessfulRegister