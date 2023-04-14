import styled from 'styled-components';

export const Container = styled.div`
    background: ${({author}) => author == true ? 'var(--blue)' : 'var(--gray-2)'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    color: var(--white);

    img{
        width: 2rem;
        margin-right: 1rem;
    }

    @media (max-width: 768px){
        padding: .5rem;

        img{
            width: 1.5rem;
            margin-right: .5rem;
        }
    }
`;
