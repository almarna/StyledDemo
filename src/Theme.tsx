import React from 'react';
import './Demo.css';
import styled, { ThemeProvider } from 'styled-components';
import { Collapse } from './Collapse';


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.bgColor};
  border: 2px solid ${props => props.theme.bgColor};
  background-color: ${props => props.theme.fgColor};
`;

const Select = styled.select`
  font-size: 1.3em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.bgColor};
  border: 2px solid ${props => props.theme.bgColor};
  background-color: ${props => props.theme.fgColor};
`;

const limeTheme = {
    bgColor: "#a4ebb3",
    fgColor: "#0c4b0f",
};

const coconutTheme = {
    bgColor: "#3d2c07",
    fgColor: "#ffffff"
};

const mangoTheme = {
    bgColor: "#740b0b",
    fgColor: "#f0e112"
};

const themes = [limeTheme, coconutTheme, mangoTheme];

export const ThemeDemo: React.FC = () => {
    const [theme, setTheme] = React.useState(0);

    return (
        <Collapse name="Theme">
            {theme}
            <ThemeProvider theme={themes[theme]}>
                <Select value={theme} onChange={(event) => setTheme(parseInt(event.target.value, 10))}>
                    <option value="0">Lime</option>
                    <option selected value="1">Coconut</option>
                    <option value="2">Mango</option>
                </Select>
                <Button>Themed</Button>
                <ThemeProvider theme={limeTheme}>
                    <Button>Lime</Button>
                </ThemeProvider>
            </ThemeProvider>
        </Collapse>
    );
};