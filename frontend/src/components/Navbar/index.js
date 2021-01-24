import { Container, Content, Title, RegisterButton } from './styles'
import Link from 'next/link'

const Navbar = ({ noRegisterButton }) => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Title>Doe-se</Title>
        </Link>
        {!noRegisterButton && (
          <Link href="/register">
            <RegisterButton variant="danger">Cadastre-se</RegisterButton>
          </Link> 
        )}
      </Content>
    </Container>
  )
}

export default Navbar