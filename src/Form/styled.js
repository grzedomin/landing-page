import styled from "styled-components";

export const Wrapper = styled.section`
     @media(max-width: 767px){
       display: flex;
       flex-direction: column;
       align-items: center;
    }
`;

export const Bar = styled.p`
    background-color: #6055a5;
    margin-bottom: 20px;
    margin-top: 0;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: 0 6px rgb(62 60 73 / 30%);
    text-align: center;

    @media(max-width: 767px){
        font-size: 16px;
    }
`;

export const StyledForm = styled.form`
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 36px;
    border-radius: 15px;

    @media(max-width: 767px){
        gap: 12px;
        padding: 26px;
    }
`;

export const Input = styled.input`
    border: 1px solid #b9b6d3;
    border-radius: 5px;
    padding: 20px 20px;
    font-weight: 400;
    font-size: 18px;
    color: #3e3c49;
    
    @media(max-width: 767px){
       font-size: 15px;
       padding: 15px 15px;
    }
`;

export const Button = styled.button`
    background-color: #38cc8c;
    padding: 18px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 -4px rgb(62 60 73 / 10%);
    transition: .2s;

    &:hover{
        background-color: #38CC96;
        cursor: pointer;
    }

    @media(max-width: 767px){
       font-size: 15px;
       padding: 14px;
    }
`;

export const Info = styled.p`
    margin: 0;
    text-align: center;
    font-size: 15px;
    color:#b9b6d3;

    @media(max-width: 767px){
       font-size: 13px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    font-weight:  600;
    color:#ff7a7a;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        color: #F15B5B;
    }
`;

export const ErrorText = styled.p`
    margin: 0;
    color: #ff7a7a;

    @media(max-width: 767px){
        font-size: 14px;
    }
`;