import styled from 'styled-components'

const Container = styled.div`
  width: 1000px;
  height: 250px;
  display: flex;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  margin: 20px 0 20px 0;
  /* padding: 25px; */
  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 4px 2px -2px ${props => `${props.theme.colors.black}1A`}; /* transparency -> 10% — 1A */
  }
`;

const Image = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 4px 0px 0px 4px;
  background-color: grey;
`;

const Infos = styled.div`
  width: 600px;
  height: 250px;
  padding: 40px 50px 40px 50px;
`;

const Name = styled.div`
  width: 100%;
  height: 30px;
`;

const NameText = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0 0 0;
  overflow-y: auto;
`;

const DescriptionText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export { 
  Container, 
  Image, 
  Infos, 
  Name, 
  NameText, 
  Description, 
  DescriptionText
 }