import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background: #222222;
    border-bottom: 2px solid #3d3d3d;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Nav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.75rem;
    color: #ffd700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Cinzel', serif;
    z-index: 101;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const NavLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-family: 'Cinzel', serif;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLinkItem = styled.li``;

export const NavLink = styled.a`
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

export const MobileMenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    z-index: 101;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileMenuIcon = styled.span`
    color: #ffd700;
    font-size: 1.5rem;
`;

export const MobileNavLinks = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #222222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 100;
    padding-top: 80px;
`;

export const MobileNavLinkItem = styled.div`
    text-align: center;
`;

export const MobileNavLink = styled.a`
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    font-size: 1.2rem;
    padding: 1rem;

    &:hover {
        color: #ffd700;
    }
`;
