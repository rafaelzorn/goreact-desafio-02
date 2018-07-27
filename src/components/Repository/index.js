import React from 'react';
import PropTypes from 'prop-types';
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

Repository.propTypes = {
    repository: PropTypes.shape({
        name: PropTypes.string.isRequired,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Repository;
