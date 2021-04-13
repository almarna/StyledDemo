import React from 'react';
import { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7, Demo8, Demo9 } from './Demo';
import { ThemeDemo } from './Theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ blueBg?: boolean }>`
body {
  margin: 2%;
  background-color: ${props => (props.blueBg ? '#1054bb' : 'black')};
  color: white;
}
`


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle blueBg />
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
      <Demo7 />
      <Demo8 />
      <Demo9 />
      <ThemeDemo />
    </>
  );
}

export default App;