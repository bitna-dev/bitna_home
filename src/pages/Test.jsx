import { colors } from '@styles/colorPalette'
import styled from '@emotion/styled'
const Test = () => {
  return <ContainerStyle>이것은 테스트다!</ContainerStyle>
}

const ContainerStyle = styled.div`
  background-color: ${colors.red};
`
export default Test
