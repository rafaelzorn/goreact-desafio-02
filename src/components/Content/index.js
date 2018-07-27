import React from 'react';
import PropTypes from 'prop-types';
import Repository from '../Repository';
import Issue from '../Issue';
import {
    Container, Header, Loading, ListIssue,
} from './styles';

const Content = ({
    repository, loading, issues, handleFecthIssues, stateSelect,
}) => (
    <Container>
        <Header>
            {Object.keys(repository).length > 0 ? (
                <div className="repository">
                    <Repository repository={repository} />
                </div>
            ) : null}

            <div className="state">
                <select
                  value={stateSelect}
                  onChange={e => handleFecthIssues(e, repository, e.target.value)}
                >
                    <option value="all">Todas</option>
                    <option value="open">Abertas</option>
                    <option value="closed">Fechadas</option>
                </select>
            </div>
        </Header>

        {loading ? (
            <Loading>
                <div>
                    <i className="fa fa-spinner fa-pulse" />
                </div>
            </Loading>
        ) : (
            <ListIssue>{issues.map(issue => <Issue issue={issue} key={issue.id} />)}</ListIssue>
        )}
    </Container>
);

Content.propTypes = {
    repository: PropTypes.PropTypes.shape().isRequired,
    loading: PropTypes.bool.isRequired,
    issues: PropTypes.arrayOf().isRequired,
    handleFecthIssues: PropTypes.func.isRequired,
    stateSelect: PropTypes.string.isRequired,
};

export default Content;
