import { Container, Content } from './styles'
import Navbar from '../../Navbar'

const Page = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page