import styled from 'styled-components'
import { Form, Button} from 'react-bootstrap'

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

export { FirsPhaseForm, SubmitButton, FormGroup, WarningText }