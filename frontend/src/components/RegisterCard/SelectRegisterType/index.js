import RegisterModel from "../RegisterModel";
import { Subtitle, HighlightedText, RegisterTypeButton, ObservationText } from './styles'

const SelectRegisterType = ({ setRegisterType }) => {
  return (
    <RegisterModel title={'Cadastro'}>
      <Subtitle>
        Você deseja se cadastrar como {' '}
        <HighlightedText color='red'>doador</HighlightedText> ou  {' '}
        <HighlightedText>donatário</HighlightedText> ?
      </Subtitle>
      <RegisterTypeButton variant="danger">Doador</RegisterTypeButton>
      <RegisterTypeButton variant="primary" onClick={() => setRegisterType('donatary')}>Donatário</RegisterTypeButton>
      <ObservationText>Seu cadastro poderá ser modificado depois</ObservationText>
    </RegisterModel>
  )
}

export default SelectRegisterType