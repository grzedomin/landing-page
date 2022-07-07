import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1300px;
    width: 100%;
    margin: 180px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;

    @media(max-width: 1350px){
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 20px;
       grid-gap: 50px;
    }

    @media(max-width: 767px){
       width: 95%;
       margin: 20px 10px;
       grid-gap: 30px;
    }
`;