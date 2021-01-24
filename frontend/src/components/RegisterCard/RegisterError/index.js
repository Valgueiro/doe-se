import { Container, ErrorText, BackToHomeText } from './styles'
import Link from 'next/link'

const RegisterError = () => {
  return (
    <Container>
      <ErrorText>Ocorreu algum erro no cadastro</ErrorText>
      <Link href="/">
        <BackToHomeText>Voltar para página inicial</BackToHomeText>
      </Link>
    </Container>
  )
}

export default RegisterError