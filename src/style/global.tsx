import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Mukta', sans-serif;
    }
    body{
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.purple};
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.colors.purple};
    }
    overflow-x:hidden}
`;
