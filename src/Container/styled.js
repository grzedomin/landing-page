import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    width: 100%;
    margin: 180px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 35px;

    @media(max-width: 1350px){
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 20px;
    }

    @media(max-width: 767px){
       width: 95%;
       margin: 20px 10px;
    }
`;