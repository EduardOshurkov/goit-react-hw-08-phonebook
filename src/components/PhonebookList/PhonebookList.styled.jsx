import styled from '@emotion/styled';

export const Button = styled.button`
display: inline-flex;
padding:0;
margin-left: 15px;
justify-content: center;
align-items: center;
width: 115px;
height: 32px;
left: 0px;
top: 0px;
background: #FFFFFF;
border-radius: 15px;


font-family: 'Quicksand';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #000000;
transition: box-shadow 0.3s, transform 0.3s;
cursor: pointer;
&:hover, focus, active {
transform: translateY(-4px);
box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
color: #000;
}
`;

export const ContactList = styled.ul`
list-style:none;
`

export const InfoContact = styled.span`
font-family: Kdam Thmor Pro;
font-size: 16px;
`

export const List = styled.li`
margin-bottom: 10px;
`