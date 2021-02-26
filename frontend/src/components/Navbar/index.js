import { Container, Content, Title, ButtonsWrapper, RegisterButton, LoginButton } from './styles'
import Link from 'next/link'

const Navbar = ({ noRegisterButton }) => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Title>Doe-se</Title>
        </Link>
        {!noRegisterButton && (
          <ButtonsWrapper>
            <LoginButton variant="primary">Login</LoginButton>
            <Link href="/register">
              <RegisterButton variant="danger">Cadastre-se</RegisterButton>
            </Link>
          </ButtonsWrapper>
        )}
      </Content>
    </Container>
  )
}

export default Navbar