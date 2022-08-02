import styled from '@emotion/styled';

export const Button = styled.button`
display: inline-flex;
    margin: 10px;
    text-decoration: none;
    border: 2px solid #BFE2FF;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 30px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-family: Kdam Thmor Pro;
    background: #337AB7;
    transition: box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
    &:hover, focus, active {
        transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
    color: #FFF;
    }
`;

export const ContactList = styled.ul`
list-style:none;
`

export const InfoContact = styled.span`
font-family: Kdam Thmor Pro;
font-size: 16px;
`