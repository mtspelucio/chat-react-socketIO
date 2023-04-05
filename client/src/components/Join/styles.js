import styled from 'styled-components';

export const Container = styled.div`
    //background-image: linear-gradient(to right, blue, red);
    background-image: linear-gradient(to top, var(--secondary-color), var(--primary-color));
    padding: 5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        margin-bottom: 3rem;
    }

    input{
        height: 2.5rem;
        width: 15rem;
        padding-left: 1rem;
        border: none;
        border-radius: 10px;
        background-color: var(--secondary-color);
        font-size: 12pt;
        color: var(--white);
    }
    input::placeholder{
        color: var(--primary-color); 
        opacity: .8;
    }
    input:focus{
        outline: 3px solid var(--clear)
    }

    button{
        font-weight: bold;
        height: 2.5rem;
        width: 15rem;
        border: none;
        border-radius: 10px;
        margin-top: 1rem;
        background-color: var(--primary-color);
        color: var(--white);
        box-shadow: 0 2px 5px var(--clear), 
            inset 0 2px 5px var(--dark);
        transition: ease all .5s;
        cursor: pointer;
    }
    button:hover{
        background-color: var(--secondary-color);
        inset .2rem .2rem .5rem var(--primary-color), 
        inset -.2rem -.2rem .5rem var(--clear);
    }
`;
