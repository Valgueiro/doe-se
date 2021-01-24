import { useState } from 'react'
import RegisterModel from '../../RegisterModel'
import { Form, Col } from 'react-bootstrap'
import { FirsPhaseForm , SubmitButton, FormGroup, WarningText } from './styles'

const FirstRegisterPhase = ({ setRegisterPhase, updateRegisterData }) => {
  const [showWarningText, setShowWarningText] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const {name, age, bloodType, rhFactor, hospital, bloodBank } = event.target;

    const formFields = {
      name: name.value, 
      age: age.value, 
      bloodType: bloodType.value, 
      rhFactor: rhFactor.value, 
      hospital: hospital.value, 
      bloodBank: bloodBank.value
    }

    // checks if any form fields are empty
    for (const field in formFields) {
      if (formFields[field].trim().length === 0) {
        setShowWarningText(true)
        return;
      }
    }

    // checks if 'bloodType' and 'rhFactor' have been selected
    if (formFields['bloodType'] === 'Tipo sanguíneo' || formFields['rhFactor'] === 'Fator Rh') {
      setShowWarningText(true)
      return;
    }

    updateRegisterData(formFields)
    setRegisterPhase('second')
  }

  return (
    <RegisterModel title="Cadastro de donatário">
      {showWarningText && <WarningText>Está faltando preencher algo</WarningText>}
      <FirsPhaseForm onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Control 
            type="text" 
            placeholder="Nome completo" 
            name="name" 
            required />
        </FormGroup>
        <Form.Row>
          <FormGroup as={Col}>
            <Form.Control 
              type="number" 
              placeholder="Idade" 
              name="age" 
              required />
          </FormGroup>
          <FormGroup as={Col}>
            <Form.Control 
              as="select" 
              defaultValue="Tipo sanguíneo" 
              name="bloodType" 
              required>
              <option>Tipo sanguíneo</option>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
            </Form.Control>
          </FormGroup>
          <FormGroup as={Col}>
            <Form.Control 
              as="select" 
              defaultValue="Fator Rh"
              name="rhFactor" 
              required>
              <option>Fator Rh</option>
              <option>Positivo</option>
              <option>Negativo</option>
            </Form.Control>
          </FormGroup>
        </Form.Row>
        <FormGroup>
          <Form.Control 
            type="text" 
            placeholder="Hospital" 
            name="hospital" 
            required />
        </FormGroup>
        <FormGroup>
          <Form.Control 
            type="text" 
            placeholder="Banco de sangue / Local para doação" 
            name="bloodBank" 
            required/>
        </FormGroup>
        <SubmitButton variant="primary" type="submit">
          Continuar
        </SubmitButton>
      </FirsPhaseForm>
    </RegisterModel>  
  )
}

export default FirstRegisterPhase