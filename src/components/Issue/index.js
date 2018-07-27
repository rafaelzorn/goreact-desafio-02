import React from 'react';
import PropTypes from 'prop-types';
import { substr } from '../../helpers';
import { Container } from './styles';

const Issue = ({ issue }) => (
    <Container>
        <img src={issue.user.avatar_url} alt={issue.user.login} />

        <div className="info">
            <div className="title">{substr(issue.title, 20)}</div>

            <div className="login">{issue.user.login}</div>

            <div>
                <a href={issue.html_url} className="button">
                    <i className="fa fa-external-link" />
                    &nbsp; ABRIR ISSUE
                </a>
            </div>
        </div>
    </Container>
);

Issue.propTypes = {
    issue: PropTypes.shape({
        title: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        user: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Issue;
