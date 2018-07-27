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
            state: 'all',
            repository: {},
            issues: [],
        };
    }

    handleFecthIssues = async (e, repository, state = 'all') => {
        this.setState({
            loading: true,
            state,
            repository: {},
        });

        try {
            const { data: issues } = await api.get(
                `/repos/${repository.full_name}/issues?state=${state}`,
            );

            this.setState({
                repository,
                issues,
            });
        } catch (err) {
            alert('aqui');
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const {
            repository, loading, issues, state,
        } = this.state;

        return (
            <Container>
                <SideBar handleFecthIssues={this.handleFecthIssues} />
                <Content
                  repository={repository}
                  loading={loading}
                  issues={issues}
                  state={state}
                  handleFecthIssues={this.handleFecthIssues}
                />
            </Container>
        );
    }
}

export default Main;
