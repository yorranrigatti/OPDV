import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    padding: 5px;
    
    --color-primary: #31295C;
    --color-secondary: #54595F;
    --color-text: #444444;
    --color-accent: #F5BF65;
} 

h1, h2, h3, h4, h5, h6 {
   font-family: 'Poppins', sans-serif;
}

a{
   text-decoration: none;
}

body {
    font-family: 'Roboto', sans-serif;
}

p, span {
    color: var(--color-text)
}

li{
   list-style-type: none;
}

button{
   cursor: pointer;
   transition: 0.5s;
} 
`;
