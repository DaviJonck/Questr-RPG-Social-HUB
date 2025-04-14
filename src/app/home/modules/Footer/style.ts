import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #1e1e1e;
    color: #ccc;
    padding: 40px 20px;
    border-top: 2px solid #333;
    margin-top: 3rem;
`;

const FooterGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

const Column = styled.div`
    flex: 1;
    min-width: 200px;
`;

const Title = styled.h4`
    font-family: 'Cinzel', serif;
    color: #ffd700;
    margin-bottom: 12px;
    font-size: 1.1rem;
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    font-family: 'Poppins', serif;

    li {
        margin-bottom: 8px;

        a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: #ffd700;
            }
        }
    }
`;

const SocialButtons = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;

    a {
        display: flex;
        align-items: center;
        background-color: #333;
        color: #ccc;
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        transition: background-color 0.2s;

        &:hover {
            background-color: #ffd700;
            color: #000;
        }

        svg {
            margin-right: 6px;
        }
    }
`;

const FooterNote = styled.div`
    text-align: center;
    color: #777;
    margin-top: 40px;
    font-size: 0.85rem;
`;

export { FooterGrid, FooterWrapper, Column, Title, LinkList, SocialButtons, FooterNote };
