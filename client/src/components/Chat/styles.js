import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(to top, var(--secondary-color), var(--primary-color));
    padding: 0 1rem 1rem 1rem;
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        margin-bottom: 2rem;
        font-size: 18pt;
    }

    .chat{
        /* background-color: red; */
        width: 90%;
        height: 90vh;
        padding: 1rem;
        overflow: hidden;
    }

    .sendMessage{
        width: 100%;
        padding: 1rem;
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
        }
        
        button{
            max-height: 2.5rem;
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
        }
    }
`;
