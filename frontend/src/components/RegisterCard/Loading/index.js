import { Container, LoadingSpinner, LoadingText } from './styles'

const Loading = () => {
  return (
    <Container>
      <LoadingSpinner animation="border" variant="primary" />
      <LoadingText>Cadastrando</LoadingText>
    </Container>
  )
}

export default Loading