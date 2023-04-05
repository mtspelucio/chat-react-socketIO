import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: .2rem .2rem .5rem var(--dark), 
        -.2rem -.2rem .5rem var(--clear);
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    color: var(--clear);
    margin-bottom: 1rem;

    img{
        width: 2rem;
        margin-right: 1rem;
        opacity: .5;
    }
`;
