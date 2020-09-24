import styled from 'styled-components';

// reusable button component


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);

// adding this syntax will let us pass these css values as props 
// if props.cart exist main color will be yellow else light blue

border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};

//  if prop.cart exist main color will be yellow else light blue

color:${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")}; 
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover {
    // on hover background color changes if cart exits in the props

    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
    outline: none;
}
` 