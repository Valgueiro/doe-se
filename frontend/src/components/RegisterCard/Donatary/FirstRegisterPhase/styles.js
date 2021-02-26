import styled from 'styled-components'
import { Form, Button} from 'react-bootstrap'
import { IoReturnUpBack } from 'react-icons/io5'

const FirsPhaseForm = styled(Form)`
  width: 390px;
`;

const FormGroup = styled(Form.Group)`
  margin: 25px 0 0 0;
`;

const SubmitButton = styled(Button)`
  width: 390px;
  color: ${props => props.theme.colors.black};
  margin-top: 35px;
`;

const WarningText = styled.p`
  margin: 0 auto;
  position: absolute;
  top: -10px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`;

const BackButton = styled(Button)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -83px;
  left: 10px;
  padding: 0;
`;

const BackIcon = styled(IoReturnUpBack)`
  width: 30px;
  height: 30px;
  margin: auto auto;
`;

export { FirsPhaseForm, SubmitButton, FormGroup, WarningText, BackButton, BackIcon }