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
        max-width: 50%;
        word-wrap: break-word;    
        position: relative;   

        ::after{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            border-bottom: 1rem solid transparent; 
            /* border-left: 1.5rem solid var(--blue);  */
            border-right: ${({author}) => author == true ? 'none' : '1.5rem solid var(--clear)'};
            border-left: ${({author}) => author == true ? '1.5rem solid var(--blue)' : 'none'};
            right: ${({author}) => author == true ? '-1rem' : 'none'};
            left: ${({author}) => author == true ? 'none' : '-1rem'};

        }
    }
    
    strong{
        color: var(--white);
        opacity: .5;
    }
    p{
        margin: .3rem 0 .3rem .5rem;
    }


    @media (max-width: 1024px){
        span{
            max-width: 80%;
        }
    }
    @media (max-width: 425px){
        span{
            max-width: 100%;
        }
    }
`;
