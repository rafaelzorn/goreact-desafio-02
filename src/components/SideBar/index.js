import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repository from '../Repository';
import api from '../../services/api';
import { Container, Form } from './styles';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            repositoryInput: '',
            repositoryError: false,
            repositories: [],
        };
    }

    handleAddRepository = async (e) => {
        e.preventDefault();

        const { repositories, repositoryInput } = this.state;

        this.setState({ loading: true });

        try {
            const { data: repository } = await api.get(`/repos/${repositoryInput}`);

            this.setState({
                repositoryError: false,
                repositoryInput: '',
                repositories: [...repositories, repository],
            });
        } catch (err) {
            this.setState({
                repositoryError: true,
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const {
            repositoryInput, repositoryError, loading, repositories,
        } = this.state;

        const { handleFecthIssues } = this.props;

        return (
            <Container>
                <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
                    <input
                        type="text"
                        placeholder="Novo repositório"
                        value={repositoryInput}
                        onChange={e => this.setState({ repositoryInput: e.target.value })}
                    />

                    <button type="submit">
                        {loading ? (
                            <i className="fa fa-spinner fa-pulse" />
                        ) : (
                            <i className="fa fa-plus-circle" />
                        )}
                    </button>
                </Form>

                <ul>
                    {repositories.map(repository => (
                        <li key={repository.id}>
                            <div
                                onClick={e => handleFecthIssues(e, repository)}
                                onKeyUp={this.handleKeyUp}
                                role="presentation"
                            >
                                <Repository repository={repository} />

                                <span className="arrow">
                                    <i className="fa fa-angle-right" />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        );
    }
}

SideBar.propTypes = {
    handleFecthIssues: PropTypes.func.isRequired,
};

export default SideBar;
