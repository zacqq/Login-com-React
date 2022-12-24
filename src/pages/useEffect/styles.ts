import styled from 'styled-components';

export const Body = styled.body`
    background-image: url(https://wallpaperaccess.com/full/1503172.jpg);
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    border: 15px solid #b80000;
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

    background-image: url(https://t3.ftcdn.net/jpg/03/98/41/60/360_F_398416001_f0UKwAUdtkBE1FQ3UCVzAv3a911uHgxm.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    font-family: 'Open Sans';
    font-size: 50px;
    color: black;

    display: flex;
    display: flex;
    justify-content: center;
`

export const Result = styled.p`

    padding: 25px;

    background-image: url(https://cdn.wallpapersafari.com/48/41/9atLrw.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
    font-family: 'Open Sans';
    font-size: 40px;
    color: black;
    font-weight: bold;

`


export const ChangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Button = styled.div`

    background-image: url(https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000);
    background-position: center;
    background-size: cover;
    border: 2px solid black;

    border-radius: 5px;
    padding: 5px 15px;

    font-family: 'Open Sans';
    font-size: 20px;
    color: black;
    font-weight: 650;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

`