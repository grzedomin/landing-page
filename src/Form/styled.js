import styled from "styled-components";

export const Wrapper = styled.form`
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 560px;
    width: 100%;
    padding: 40px;
    border-radius: 15px;
`;

export const Input = styled.input`
    height: 50px;
    border: 1px solid #b9b6d3;
    border-radius: 5px;
    padding: 5px 20px;
    font-weight: 600;
    font-size: 18px;
    color: #3e3c49;
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
`;

export const Info = styled.p`
    margin: 0;
    text-align: center;
    font-size: 15px;
    color:#b9b6d3;
`;

export const Link = styled.a`
    text-decoration: none;
    font-weight:  600;
    color:#ff7a7a;
    transition: 0.1s;

    &:hover {
        cursor: pointer;
        color: #F15B5B;

    }
`;