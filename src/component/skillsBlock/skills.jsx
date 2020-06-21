import React from 'react';
import styled from '@emotion/styled';
import { css } from 'emotion';

const Name = css({
    marginTop: 0,
});

const Eamil = styled.a`
    color: #029bba;
    &:hover {
        color: #00596b;
    }
`;

const GeneralInfo = ({ className }) => (
    <div className={className}>
        <h2 className={Name}>BAI PENG LI (Jacky)</h2>
        <p>Frontend Developer</p>
        <Eamil href="mailto: j25693210@gmail.com">j25693210@gmail.com</Eamil>
        <p>(+886)0988-505-207</p>
        <p>Taipei, TW</p>
    </div>
);

export default GeneralInfo;