import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background-color: #fff;
    align-self: stretch;
    box-shadow: 0px 0px 20px #e7e7e7;
    z-index: 999;

    ul {
        li {
            margin-bottom: 20px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid #eee;

    input {
        flex: 1;
        padding: 0 10px;
        height: 40px;
        border: 0;
        border-radius: 3px;
        background-color: #eee;
    }

    button {
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b8;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
    }
`;
