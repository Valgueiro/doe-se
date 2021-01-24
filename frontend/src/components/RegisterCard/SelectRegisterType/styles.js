import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Subtitle = styled.h2`
  width: 290px;
  margin: 0;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
`;

const HighlightedText = styled.span`
 color: ${props => props.color === 'red' ? props.theme.colors.red : props.theme.colors.blue};
`;

const RegisterTypeButton = styled(Button)`
  width: 290px;
  color: ${props => props.theme.colors.black};
  margin: 50px 0 0 0;
`;

const ObservationText = styled.h6`
  margin: 80px auto 0 auto;
  font-weight: 400;
  font-size: 13px;
`;

export { Subtitle, HighlightedText, RegisterTypeButton, ObservationText }