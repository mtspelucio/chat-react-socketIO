import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    align-items: flex-end;
    display: flex;
    justify-content: ${({author}) => author == true ? 'end' : 'start'};

    span{
        background: ${({author}) => author == true ? 'var(--blue)' : 'var(--clear)'};
        border-radius: 10px;
        padding: .5rem 1rem;
        margin-bottom: 1rem;
        max-width: 30rem;
        word-wrap: break-word;
        position: relative;        
    }
    
    strong{
        color: var(--white);
        opacity: .5;
    }
    p{
        margin: .3rem 0 .3rem .5rem;
    }
`;
