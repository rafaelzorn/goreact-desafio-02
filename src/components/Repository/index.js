import React from 'react';
import { Container } from './styles';

const Repository = () => (
    <Container>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" />

        <div className="info">
            <span className="technology">react</span>
            <br />
            <span className="company">Facebook</span>
        </div>
    </Container>
);

export default Repository;
