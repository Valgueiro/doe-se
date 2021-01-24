import { useState } from 'react'
import RegisterModel from '../../RegisterModel'
import { Form } from 'react-bootstrap'
import { 
  FormFile, 
  InputFile, 
  InputLabel, 
  Image, 
  FormGroup, 
  SubmitButton,
  UserIcon,
  WarningText } from './styles'

const SecondRegisterPhase = ({ setRegisterPhase, updateRegisterData }) => {
  const [imgSrc, setImgSrc] = useState(undefined)
  const [showWarningText, setShowWarningText] = useState(false)

  const handlePhotoSelected = (e) => {
    setImgSrc(URL.createObjectURL(event.target.files[0]))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const description = event.target.description.value

    // checks if description field is empty
    if (description.trim().length === 0) {
      setShowWarningText(true)
      return;
    }

    const data = {
      photo: imgSrc,
      description: description
    }

    updateRegisterData(data)
    setRegisterPhase('loading')
  }

  return (
  <RegisterModel title="Cadastro de donatário">
    {showWarningText && <WarningText>Está faltando algo</WarningText>}
    <FormFile id="formcheck-api-regular">
      <InputLabel>
      <UserIcon style={{width:  70, height: 70}}/>
        <Image src={imgSrc}/>
      </InputLabel>
      <InputFile 
        accept="image/x-png, image/jpeg, image/jpg"
        onChange={(e) => handlePhotoSelected(e)}
        onClick={(e) => (e.target.value = null)}
      />
    </FormFile>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control 
          as="textarea"
          placeholder="Fale sobre o donatário, para que as pessoas o conhecem melhor." 
          rows={3} 
          name="description"
          style={{resize: 'none'}}/>
      </FormGroup>
      <SubmitButton variant="primary" type="submit">
        Finalizar cadastro
      </SubmitButton>
    </Form>
  </RegisterModel>
  )
}

export default SecondRegisterPhase