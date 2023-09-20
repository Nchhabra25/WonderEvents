import {createGlobalStyle} from "styled-components"
const GlobalStyles=createGlobalStyle`
    html{
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar{
        width: 1.5rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #da3d3d;
        border: 6px solid transparent;
        border-radius: 90px;
        background-clip: content-box;
        
    }
    body{
        font-family: 'Sora', sans-serif;
        overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;

    }
    button{
    display:inline-block;
    background-color:#f8a6a6;
    color: #fff;
    font-size: 1em;
    text-shadow:2px 2px 3px #000;
    outline:none;
    border:none;
    border-radius:50px;
    padding: 0.9rem 2.3rem;
    font-weight: bold;
    cursor:pointer;
    transition:all 0.2s ease;
    position: relative;
    &:hover{
        transform:scale(0.9);
        text-decoration: underline;
    }
    &::after{
        content: '';
        position: absolute;
        top:50%;
        left: 50%;
        width:100%;
        height:100%;
        transform:translate(-50%,-50%) scale(0);
        border:2px solid #202020;
        border-radius: 50px;
        transition: all 0.2s ease;
    }
    &:hover::after{
        transform:translate(-50%,-50%) scale(1);
        padding:0.3rem;
    }
    
    }
`
export default GlobalStyles;