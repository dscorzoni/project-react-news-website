import styled from 'styled-components';
import Logo from './assets/images/logo.svg';

/* Styled Components */
const HeaderBar = styled.header`
    margin: 2rem 0 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoDiv = styled.div`

`;

const NavBar = styled.nav`
    display: flex;
    gap: 3rem;

    a {
        text-decoration: none;
        color: hsl(236, 13%, 42%);
        font-weight: 400;
    }

    a:hover {
        color: hsl(5, 85%, 63%);
    }
`;

/* Header Component */
const Header = () => {
    return(
        <HeaderBar>
            <Container>
                <LogoDiv>
                    <img src={Logo} alt="Logo" />
                </LogoDiv>
                <NavBar>
                    <a href="index.html">Home</a>
                    <a href="index.html">New</a>
                    <a href="index.html">Popular</a>
                    <a href="index.html">Trending</a>
                    <a href="index.html">Categories</a>
                </NavBar>
            </Container>
        </HeaderBar>
    )
}

export default Header;