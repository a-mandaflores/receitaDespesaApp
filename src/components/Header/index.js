import { useNavigation } from '@react-navigation/native';

import { Container, Title, ButtonMenu } from './styles';

export default function Header({ title }){
  const navigation = useNavigation();

  return(
    <Container>
      <ButtonMenu onPress={ () => navigation.openDrawer() }>

      { title && (
        <Title>
          {title}
        </Title>
      )}
      </ButtonMenu>
    </Container>
  )
}