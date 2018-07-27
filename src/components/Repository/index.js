import React from 'react';
import { Container } from './styles';

const Repository = ({ repository }) => (
    <Container>
        <img src={repository.owner.avatar_url} alt={repository.name} />

        <div className="info">
            <span className="technology">{repository.name}</span>
            <br />
            <span className="company">{repository.owner.login}</span>
        </div>
    </Container>
);

export default Repository;
