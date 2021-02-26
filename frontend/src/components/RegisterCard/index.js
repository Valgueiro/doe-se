import { useState, useEffect } from 'react'
import { Container } from './styles'
import SelectRegisterType from './SelectRegisterType'
import Donatary from './Donatary'

// This is the user registration card.
// If no 'type' is passed, the registration type screen will be shown,
// otherwise the selected registration type will be shown.
const RegisterCard = ({ type }) => {
  const [registerType, setRegisterType] = useState('registerTypeSelection')

  useEffect(() => {
    if (type === 'donor') setRegisterType('donor') 
    else if (type === 'donatary') setRegisterType('donatary')
    else setRegisterType(undefined)
  },[type])

  const backToRegisterTypeSelectionCard = () => {
    setRegisterType('registerTypeSelection');
  }

  const Content = () => {
    switch (registerType) {
      case 'donor':
        return <h1>Doador</h1>
      case 'donatary':
        return <Donatary backToRegisterTypeSelectionCard={backToRegisterTypeSelectionCard}/>
      default:
        return <SelectRegisterType setRegisterType={setRegisterType}/>
    }
  }

  return (
    <Container>
      <Content />
    </Container>
  )
}

export default RegisterCard