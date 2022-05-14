import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* .h1{ font: ${props => props.theme.text.h1}}
  .h2{ font: ${props => props.theme.text.h2}}
  .h3{ font: ${props => props.theme.text.h3}}
  .h4{ font: ${props => props.theme.text.h4}}
  .h5{ font: ${props => props.theme.text.h5}}
  .l{ font: ${props => props.theme.text.text_large}}
  .lb{ font: ${props => props.theme.text.text_large_bold}}
  .m{ font: ${props => props.theme.text.text_medium}}
  .mb{ font: ${props => props.theme.text.text_medium_bold}}
  .s{ font: ${props => props.theme.text.text_small}}
  .sb{ font: ${props => props.theme.text.text_small_bold}}
  .sub{ font: ${props => props.theme.text.subtitle}}
  .subB{ font: ${props => props.theme.text.subtitle_bold}}
  .subSB{ font: ${props => props.theme.text.subtitle_small}}
  .subSB{ font: ${props => props.theme.text.subtitle_small_bold}} */

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button{
    font-family: Poppins, sans-serif;
  }
  html{
    overflow-x: hidden;
  }
  //Remove Arrows/Spinners
  //Example
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  /* Scrollbar */
  * {
    scrollbar-width: thin;          /* "auto" or "thin"  */
    scrollbar-color: ${props => props.theme.colors.primary100} ${props =>
  props.theme.colors.black80};   /* scroll thumb & track */
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;             /* width of the entire scrollbar */
  }
  *::-webkit-scrollbar-track {
    background: ${props =>
      props.theme.colors.black80};        /* color of the tracking area */
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.theme.colors.primary100};    /* color of the scroll thumb */
    border-radius: 40px;       /* roundness of the scroll thumb */
    border: 1px solid ${props =>
      props.theme.colors.black80};  /* creates padding around scroll thumb */
  }

`
export default GlobalStyles
