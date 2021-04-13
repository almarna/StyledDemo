import React from 'react';
import './Demo.css';
import styled, { css } from 'styled-components';
import { Collapse } from './Collapse';

const Demo1Style = styled.div`
text-align: center;
border: 1px solid white;
width: 10rem;
margin: 1rem;
`;

export const Demo1: React.FC = () => {
    return (
        <Collapse name="Demo1">
            <div style={{
                textAlign: "center",
                border: "1px solid white",
                width: "10rem",
                margin: "1rem"
            }} >
                Goddagens!
                </div>
            <div className="Demo1">
                Hej!
            </div>
            <Demo1Style>Hejsan!</Demo1Style>
        </Collapse>
    );
};

const Demo2Input = styled.input`
padding:10px;
border-radius:10px;
margin: 5px;
`;

const Demo2Button = styled.button`
    appearance:none;
    padding:10px;
    border:none;
    background-color:#747faf;
    color:#fff;
    font-weight:600;
    border-radius:5px;
    margin: 5px;
`;

export const Demo2: React.FC = () => {
    return (
        <Collapse name="Demo2">
            <Demo2Input type="text" placeholder="namn" />
            <Demo2Button onClick={() => alert("Halloj!")}>Klicka på</Demo2Button>
        </Collapse>
    );
};

const Demo3Div = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    background-color: black;
    color: yellow;
`;

const Demo3Button = styled(Demo2Button) <{ state: string }>`
   color: white;
   background-color: ${(props) => {
        switch (props.state) {
            case "off":
                return "blue";
            case "on":
                return "green";
            default:
                return "red";
        }
    }
    }
`;

export const Demo3: React.FC = () => {
    const [state, setState] = React.useState("unknown");
    const [width, setWidth] = React.useState(10);

    return (
        <Collapse name="Demo3">
            <Demo3Div width={width}>Tja!</Demo3Div>
            <Demo3Button state={state} onClick={() => { setState("on"); setWidth(width + 10); }}>På</Demo3Button>
            <Demo3Button state={state} onClick={() => { setState("off"); setWidth(10); }}>Av</Demo3Button>        </Collapse>
    );
};

const Demo41Style = styled.div<{ width?: string }>`
text-align: center;
border: 1px solid #ffffff;
width: ${props => props.width ?? "10rem"};
margin: 1rem;
`;

const Demo42Style = styled.div<{ width?: string }>`
text-align: center;
border: 1px solid #ffffff;
width: ${props => props.width};
margin: 1rem;
`;

export const Demo4: React.FC = () => {
    return (
        <Collapse name="Demo4">
            <Demo41Style width={"20rem"}>Bred</Demo41Style>
            <Demo41Style>Normal</Demo41Style>
            <Demo42Style width={"25rem"}>Bredare</Demo42Style>
            <Demo42Style>Saknas</Demo42Style>
        </Collapse>
    );
};

const Container5Style = styled.div`
color: #85d3e0;
`;

const MyComplexFC5: React.FC<{ text: string, className?: string }> = (props) => {
    return (
        <Container5Style className={props.className}>
            {props.text}
        </Container5Style>
    );
};

const MyModdedFC5 = styled(MyComplexFC5)`
  background-color: #40327c;
`;

export const Demo5: React.FC = () => {
    return (
        <Collapse name="Demo5">
            <MyComplexFC5 text="Hej1!" />
            <MyModdedFC5 text="Hej2!" />
        </Collapse>
    );
};

const MyComplexFC6: React.FC<{ text: string, className?: string }> = (props) => {
    return (
        <Container5Style>
            {props.text} <span className={props.className}>{props.text}</span>
        </Container5Style>
    );
};

const MyModdedFC6 = styled(MyComplexFC6)`
  background-color: #40327c;
`;

export const Demo6: React.FC = () => {
    return (
        <Collapse name="Demo6">
            <MyComplexFC6 text="Hej1!" />
            <MyModdedFC6 text="Hej2!" />
        </Collapse>
    );
};

const css7 = css`
    background-color: green;
`;

export const Demo7: React.FC = () => {
    return (
        <Collapse name="Demo7">
        </Collapse>
    );
};

const Specificitet = styled.div`
&&& {
    color: palevioletred;
    font-weight: bold;
  }
`;

export const Demo8: React.FC = () => {
    return (
        <Collapse name="Demo8">
            <Specificitet>Yoman!</Specificitet>
        </Collapse>
    );
};
export const Demo9: React.FC = () => {
    return (
        <Collapse name="Demo9">
        </Collapse>
    );
};
