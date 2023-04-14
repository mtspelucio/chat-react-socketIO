import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 20rem 1fr; 
    grid-gap: 1rem;

    
    
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
        gap: 1rem;
    }


    .chatContainer{
        position: relative;
    }

    .chatContainer::before{
        content: '';
        display: block;
        position: absolute;
        top: 1.8rem;
        width: 100%;
        height: 5rem;
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
        padding: 1rem ;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        input{
            background-color: var(--gray-2);
            height: 2.5rem;
            width: 100%;
      
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
            position: absolute;
            right: 2rem;
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

    @media (max-width: 1024px){
        grid-template-columns: 12rem 1fr;
    }
    @media (max-width: 425px){
        display: flex;
        flex-direction: column;

        .chatContainer,
        .users{
            padding: 1rem;
        }

        .users{

            height: 15rem;
        }

        .chatContainer::before{
            top: 1rem;
        }
    }
`;
