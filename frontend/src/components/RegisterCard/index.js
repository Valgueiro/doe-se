import { useState, useEffect } from 'react'
import { Container } from './styles'
import SelectRegisterType from './SelectRegisterType'
import Donatary from './Donatary'

// This is the user registration card.
// If no 'type' is passed, the registration type screen will be shown,
// otherwise the selected registration type will be shown.
const RegisterCard = ({ type }) => {
  const [registerType, setRegisterType] = useState(undefined)

  useEffect(() => {
    if (type === 'donor') setRegisterType('donor') 
    else if (type === 'donatary') setRegisterType('donatary')
    else setRegisterType(undefined)
  },[type])

  return (
    <Container>
      {!registerType && <SelectRegisterType setRegisterType={setRegisterType}/>}
      {registerType === 'donor' && <h1>doador</h1>}
      {registerType === 'donatary' && <Donatary />}
    </Container>
  )
}

export default RegisterCard