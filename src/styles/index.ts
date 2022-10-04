import { createGlobalStyle } from "styled-components";
import resetCss from "./reset.css";

export default createGlobalStyle`
    ${resetCss}

    :root {
        font-family: 'Montserrat', sans-serif;
    }
    
    --megasena: #6BEFA3;
    --quina: #8666EF;
    --lotofacil: #DD7AC6;
    --lotomania:  #FFAB64;
    --timemania: #5AAD7D;
    --diadesorte:#BFAF83;

    --white: #FFFFFF;
    --black: #000000;
    --gray300:#333333;
    --gray600:#848484;
    --gray900:#EFEFEF;






`;
