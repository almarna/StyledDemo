

import React from 'react';
import styled from 'styled-components';

const Header = styled.h4`
    cursor: pointer;
`;

export const Collapse: React.FC<{ name: string }> = (props) => {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <Header onClick={() => setShow(!show)}>{props.name} </Header>
            {show && props.children}
            <hr />
        </>
    );
}