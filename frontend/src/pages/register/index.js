import Page from '../../components/Containers/Page'
import { Content } from './styles'
import RegisterCard from '../../components/RegisterCard'

const Register = () => {
  return (
    <Page noRegisterButton>
      <Content>
        <RegisterCard />
      </Content>
    </Page>
  )
}

export default Register