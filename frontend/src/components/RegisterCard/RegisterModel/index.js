import { Container, Title, Content } from './styles'

const RegisterModel = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  )
}

export default RegisterModel