import styled from 'styled-components';

export const Container = styled.div`
    background: ${({author}) => author == true ? 'var(--blue)' : 'var(--gray-2)'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    color: var(--white);
    margin-bottom: 1rem;

    img{
        width: 2rem;
        margin-right: 1rem;
    }
`;
