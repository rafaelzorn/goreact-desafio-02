import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;

    img {
        margin-right: 10px;
        width: 45px;
        height: 45px;
        border-radius: 5px;
    }

    .info {
        position: relative;
        top: 7px;

        .technology {
            font-weight: 600;
        }

        .company {
            font-size: 11px;
            color: #bfbfbf;
        }
    }
`;
