import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 20rem 1fr; 
    grid-gap: 1rem;

    @media (min-width: 1400px){
        .chatContainer::before{
        width: 10rem;
    }
    }
    
    .chatContainer,
    .users{
        background: var(--gray-1);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        overflow-y: scroll;
    }
    .users{
        background: var(--gray-1);
        
    }

    .chatContainer::before{
        content: '';
        display: block;
        position: fixed;
        width: 60%;
        height: 8rem;
        background: linear-gradient(to bottom, var(--gray-1) 20%, transparent 90%);
        z-index: 999;
    }

    .chat{
        flex: 1;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        overflow-y: scroll;
    }

    .users, 
    .chat{
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            margin: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--clear);
            border-radius: 20px;
        }
    }
    .chatContainer{
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .sendMessage{
        width: 100%;
        padding-left: 4rem ;
        display: flex;

        input{
            background-color: var(--gray-2);
            height: 2.5rem;
            width: 90%;
      
            border: none;
            border-radius: 10rem;
            padding: 0 3.5rem 0 1rem;
            color: var(--white);

            ::placeholder{
                color: var(--white); 
                opacity: .5;
            }
        }
        
        button{
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            right: 2.5rem;
            cursor: pointer;
            transition: .5s;

            img{
                width: 1.5rem;
            }

            :hover{
                scale: 1.1;
            }
            
        }
    }
    
`;
