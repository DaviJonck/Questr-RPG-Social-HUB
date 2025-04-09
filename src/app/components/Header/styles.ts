import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: #222222;
    border-bottom: 2px solid #3d3d3d;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
`;

const Nav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.75rem;
    color: #ffd700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Cinzel', serif;
`;

const NavLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-family: 'Cinzel', serif;
`;

const NavLinkItem = styled.li``;

const NavLink = styled.a`
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    font-size: 0.9rem;

    &:hover {
        color: #ffd700;
    }
`;

export { HeaderWrapper, Nav, Logo, NavLinks, NavLinkItem, NavLink };
