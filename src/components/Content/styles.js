import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Header = styled.header`
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0px 0px 20px #c5c5c5;

    .repository {
        float: left;
    }

    .state {
        float: right;
        width: 200px;

        select {
            padding: 10px 10px;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 5px;
            appearance: none;
        }
    }
`;

export const Loading = styled.div`
    margin: 80px auto;
    font-size: 40px;
    color: #b286d1;
`;

export const ListIssue = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding: 20px;
`;
