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
        background-image: linear-gradient(to top, var(--secondary-color), var(--primary-color));
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        overflow-y: scroll;
    }
    .users{
        background-image: linear-gradient(to top, var(--secondary-color), var(--secondary-color));
        
    }

    .chat{
        flex: 1;
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
        padding: 1rem 3rem;
        display: flex;
        justify-content: space-between;

        input{
            background-color: var(--secondary-color);
            height: 2.5rem;
            width: 90%;
            box-shadow: inset .2rem .2rem .5rem var(--primary-color), 
                inset -.2rem -.2rem .5rem var(--clear);
            border: none;
            border-radius: 10rem;
            padding-left: 1rem;
            color: var(--white);

            ::placeholder{
                color: var(--white); 
                opacity: .2;
            }

            :focus{
                /* border: 2px solid var(--clear); */
                box-shadow: .2rem .2rem .5rem var(--primary-color), 
             -.2rem -.2rem .5rem var(--clear);                
            }
        }
        
        button{
            max-height: 2.5rem;
            width: 8rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 1rem;
            margin-left: 1rem;
            background-color: var(--secondary-color);
            box-shadow: .2rem .2rem .5rem var(--primary-color), 
             -.2rem -.2rem .5rem var(--clear);
            color: var(--white);
            font-weight: bold;
            cursor: pointer;
            transition: .5s;

            :hover{
                box-shadow: 0 0 1rem var(--clear);
                scale: 1.1;
            }
            
        }
    }
    
`;
