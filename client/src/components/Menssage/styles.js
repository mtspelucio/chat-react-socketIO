import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--clear);
    box-shadow: .2rem .2rem .5rem var(--primary-color), 
             -.2rem -.2rem .5rem var(--clear);
    
    border-radius: 10px;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    max-width: 40%;
    

    p{
        margin-left: .3rem;
    }
`;