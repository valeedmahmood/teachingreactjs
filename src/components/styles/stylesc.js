import styled from 'styled-components'

export const Button = styled.button`
    background:${props => props.isChecked ? 'blue' : 'red'};
    color:${props=>props.theme.buttonColor};
    border:0;
    
`