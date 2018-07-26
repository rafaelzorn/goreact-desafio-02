import React from 'react';
import Repository from '../Repository';

import { Container, Form } from './styles';

const SideBar = () => (
    <Container>
        <Form>
            <input type="text" placeholder="Novo repositório" />
            <button type="submit">
                <i className="fa fa-plus-circle" />
            </button>
        </Form>

        <ul>
            <li>
                <Repository />
            </li>
        </ul>
    </Container>
);

export default SideBar;
