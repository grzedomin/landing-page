import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    @media(max-width: 1350px){
        align-items: center;
    }
`;

export const Header = styled.h1`
    font-size: 55px;
    font-weight: 700;

    @media(max-width: 767px){
        font-size: 30px;
    }
`;

export const Text = styled.p`
    font-size: 20px;
    margin: 0;
    
    @media(max-width: 1350px){
       text-align: center;
        max-width: 560px;
        width: 100%;
    }
    @media(max-width: 767px){
        font-size: 16px;
    }
`;