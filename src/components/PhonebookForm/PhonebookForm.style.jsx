import styled from '@emotion/styled';

export const FormPhonebook = styled.div`
display: flex;
justify-content: center;
`

export const PhonebookFormLabel = styled.label`
font-family: Kdam Thmor Pro;
font-size: 16px;
margin-right: 10px;
`;

export const PhonebookFormInput = styled.input`
width: 150px;
height: 26px;
margin-left: 10px;
`;


export const ButtonForm = styled.button`
display: inline-flex;
padding:0;
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