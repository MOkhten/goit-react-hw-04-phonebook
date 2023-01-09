import styled from 'styled-components';

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
border: 1px solid lightblue;
border-radius: 5px;
width: 350px;
padding: 20px 30px;`

export const FormTitle = styled.h2`
color: grey;
font-size: 16px;
display: inline-flex;
flex-wrap: wrap;`

export const Button = styled.button`
width: 180px;
  padding: 6px;
  margin-top: 20px;
  margin-left: 80px;
background-color: lightblue;
color: white;
border-radius: 2px;
border:none;
padding: 5px;
cursor: pointer;
`
export const Input = styled.input`
display: flex;
  justify-content: space-between;
  width: 250px;
:hover,
  :focus {
    border-color: lightblue;
    display: inline-flex;
  }`