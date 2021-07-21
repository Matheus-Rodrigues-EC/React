import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HomeConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const input = styled.input`
border: 1px solid #ddd;
height: 2.5rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus,
&active{
    outline: none;
    box-shadown: none;
}
`;

export const button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0.25rem 0.25re, 0;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
`;

export const ErrorMessage = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weigth: 600;
    margin-top: 1rem;
`;