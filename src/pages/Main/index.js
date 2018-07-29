import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
import api from '../../services/api';
import { Container } from './styles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            stateSelect: 'all',
            repository: {},
            issues: [],
        };
    }

    handleFecthIssues = async (e, repository, stateSelect = 'all') => {
        this.setState({
            loading: true,
            stateSelect,
            repository: {},
        });

        try {
            const { data: issues } = await api.get(
                `/repos/${repository.full_name}/issues?state=${stateSelect}`,
            );

            this.setState({
                repository,
                issues,
            });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const {
            repository, loading, issues, stateSelect,
        } = this.state;

        return (
            <Container>
                <SideBar handleFecthIssues={this.handleFecthIssues} />
                <Content
                    repository={repository}
                    loading={loading}
                    issues={issues}
                    stateSelect={stateSelect}
                    handleFecthIssues={this.handleFecthIssues}
                />
            </Container>
        );
    }
}

export default Main;
