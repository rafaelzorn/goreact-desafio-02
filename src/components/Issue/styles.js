import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 20px #dedede;
    border: 1px solid #ececec;
    border-radius: 5px;

    img {
        flex: 0;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }

    .info {
        display: flex;
        flex-direction: column;

        .title {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 5px;
        }

        .login {
            font-size: 12px;
            color: #bfbfbf;
            margin-bottom: 10px;
        }

        .button {
            color: #fff;
            padding: 8px 15px;
            font-weight: 600;
            background-color: #b286d1;
            border: none;
            border-radius: 2px;
            text-decoration: none;
            font-size: 12px;
            opacity: 0.6;

            :hover {
                transition: 0.5s;
                opacity: 1;
            }
        }
    }
`;
