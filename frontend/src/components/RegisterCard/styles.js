import styled from 'styled-components'

const Container = styled.div`
  width: 480px;
  height: 465px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export { Container }