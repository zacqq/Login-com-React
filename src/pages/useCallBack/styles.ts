import styled from 'styled-components';

export const Body = styled.body`
    background-image: url(https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?w=2000);
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    border: 15px solid #0AB3D0;
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

    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    font-family: 'Open Sans';
    font-size: 50px;
    color: white;

    display: flex;
    display: flex;
    justify-content: center;
`

export const Result = styled.p`

    padding: 25px;

    background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-blue-atmospheric-background-image_50584.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 15px;

    
    font-family: 'Open Sans';
    font-size: 25px;
    color: white;
    font-weight: bold;

`


export const ChangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Button = styled.div`

    background-image: url(https://img.freepik.com/free-vector/gradient-blue-abstract-background_23-2149108576.jpg);
    background-position: center;
    background-size: cover;
    border: 2px solid black;

    border-radius: 5px;
    padding: 5px 15px;

    font-family: 'Open Sans';
    font-size: 20px;
    color: white;
    font-weight: 650;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

`