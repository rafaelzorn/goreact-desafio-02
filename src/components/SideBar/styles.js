import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    align-self: stretch;
    min-height: 100vh;
    background-color: #fff;
    box-shadow: 0px 0px 20px #c5c5c5;
    z-index: 999;

    ul {
        li {
            margin-bottom: 20px;
            color: #000;
            text-decoration: none;
            opacity: 0.7;
            cursor: pointer;

            :hover {
                opacity: 1;
                transition: 1s;
            }

            .arrow {
                position: relative;
                top: -31px;
                float: right;
                color: #bdbdbd;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;

    input {
        padding: 15px 10px;
        margin-right: 10px;
        border: 0;
        border-radius: 3px;
        background-color: #eee;
        border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};
    }

    button {
        padding: 0 20px;
        background: #63f5b8;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
    }
`;
