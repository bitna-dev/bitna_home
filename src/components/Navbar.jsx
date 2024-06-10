import styled from '@emotion/styled'
import logo from '@assets/logo.png'
import { colors } from '@styles/colorPalette'
import { css } from '@emotion/react'

const Navbar = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <a href="/">
          <img src={logo} alt="logo" css={ImageStyles} />
        </a>
        <span>DEV | BITNA</span>
      </LogoContainer>
      <NavContainer>
        <li>
          <a href="/intro">ABOUT</a>
        </li>
        <li>
          <a href="/portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </NavContainer>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
  position: fixed;
  min-width: 480px;
  max-height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray500};
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hindden;
  align-items: center;
  & span {
    font-size: 16px;
    text-shadow: 2px 1px #7fc3d1;
  }
`
const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  & a {
    font-size: 20px;
    padding: 14px;
    position: relative;
    &::before {
      content: '';
      width: calc(100% - 28px);
      height: 1px;
      background-color: var(--black);
      position: absolute;
      left: 14px;
      bottom: 10px;
      transform: scaleX(0);
      transition: all 0.3s;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
`

const ImageStyles = css`
  max-width: 80px;
  max-height: 60px;
`

export default Navbar
