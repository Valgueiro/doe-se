import { 
  Container, 
  Image, 
  Infos, 
  Name, 
  NameText, 
  Description, 
  DescriptionText } from './styles'

const DonataryCard = ({data}) => {
  const {name, description} = data;
  return (
    <Container>
      <Image></Image>
      <Infos>
        <Name>
          <NameText>{name}</NameText>
        </Name>
        <Description>
          <DescriptionText>
            {description}
          </DescriptionText>
        </Description>
      </Infos>
    </Container>
  )
}

export default DonataryCard