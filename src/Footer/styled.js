import styled from "styled-components";

export const Wrapper = styled.footer`
    text-align: center;
    font-size: 16px;
`;

export const Author = styled.a`
    text-decoration: none;
    font-weight: 500;
    margin-left: 6px;
    color: #3e3c49;
    transition: .2s;

    &:hover {
        color: #55545F;
    }
    &:visited {
        color: #3e3c49;
    }
`;