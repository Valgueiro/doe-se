import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'
import { RiFileUserLine } from 'react-icons/ri'

const FormFile = styled(Form.File)`
  width: 390px;
`;

const InputFile = styled(Form.File.Input)`
  visibility: hidden;
`;

const InputLabel = styled(Form.File.Label)`
  width: 200px;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #C5C5C5;
  margin: 0 auto;
  /* position: relative; */
  /* left: 96px; */
  &:hover{
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const FormGroup = styled(Form.Group)`
  width: 390px;
`;

const SubmitButton = styled(Button)`
  width: 390px;
  color: ${props => props.theme.colors.black};
`;

const UserIcon = styled(RiFileUserLine)`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  position: absolute;
  color: ${props => `${props.theme.colors.black}80`};
  border: 1px dashed ${props => `${props.theme.colors.white}80`};
`;

const WarningText = styled.p`
  margin: 0 auto;
  position: absolute;
  top: 170px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`;

export { 
  FormFile, 
  InputFile, 
  InputLabel, 
  Image, 
  FormGroup, 
  SubmitButton,
  UserIcon,
  WarningText
}