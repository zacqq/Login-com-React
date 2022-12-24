import styled from 'styled-components';

export const Body = styled.body`
    background: linear-gradient(to bottom, #6ab7f5, #fff);
    min-height: 100vh;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Titulo = styled.h1`
    margin-top: 20px;
    padding: 10px;

    background-image: url(https://i.pinimg.com/736x/d7/9d/51/d79d51fec45686ddf73f53357ab50a6d.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    font-family: 'Open Sans';
    font-size: 50px;
    font-color: white;

    display: flex;
    display: flex;
    justify-content: center;
`

export const Result = styled.p`

    padding: 20px;

    background-image: url(https://static.vecteezy.com/system/resources/thumbnails/003/031/750/small/dark-blue-wide-background-with-radial-blurred-gradient-vector.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    
    font-size: 40px;

`


export const ChangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Button = styled.div`

    background-image: url(https://i.pinimg.com/736x/ec/57/64/ec5764d17e477ef95c31c4b630d02e0c.jpg);
    background-position: center;
    background-size: cover;

    border-radius: 5px;
    padding: 5px;

    font-size: 20px;
    color: white;
    font-weight: 650;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

`