import styled from 'styled-components';

export const Body = styled.body`
    background-image: url(https://cdn3.vectorstock.com/i/1000x1000/30/12/abstract-geometric-background-black-and-white-vector-10383012.jpg);
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    border: 15px solid #505355;
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

    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGVv67cP2KYGR_x-g9uC5kWmgNPy64desNUo3_4TUC6wt6rzTFJKx-MSnYVoqFH6az7s&usqp=CAU);
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

    background-image: url(https://wallpaperaccess.com/full/1156725.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
    font-family: 'Open Sans';
    font-size: 40px;
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