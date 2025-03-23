import { Link, useLocation } from 'react-router-dom'
import { Stack } from 'smarthr-ui'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <NavigationContainer>
        <Stack gap={0.5}>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/layout">LAYOUT</NavItem>
          <NavItem to="/messages">MESSAGES</NavItem>
        </Stack>
      </NavigationContainer>
      <MainContainer>
        {children}
      </MainContainer>
    </Container>
  )
}

type NavItemProps = {
  to: string
  children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <StyledLink to={to} $isActive={isActive}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 0.75rem 1rem;
  color: ${({ $isActive }) => ($isActive ? '#0077c7' : '#23221f')};
  background-color: ${({ $isActive }) => ($isActive ? '#e5f2fa' : 'transparent')};
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#e5f2fa' : '#f3f5f6')};
  }
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const NavigationContainer = styled.nav`
  width: 240px;
  padding: 1rem;
  border-right: 1px solid #e5e7eb;
`

const MainContainer = styled.main`
  flex: 1;
  padding: 2rem;
`
