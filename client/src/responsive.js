import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 850px){
            ${props}
        }
    `
}

export const mobileSm = (props) => {
    return css`
        @media only screen and (max-width: 550px){
            ${props}
        }
    `
}