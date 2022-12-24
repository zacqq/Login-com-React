import React from 'react';
import { useState} from 'react';
import {Titulo, Main, ChangeContainer, Button, Result, Body} from './styles';

const UseState = () => {

    const [name, setName] = useState('Izaac');
    const handleChangeName = () => {
        setName ( prev => prev === 'Izaac' ? 'SeuNome' : 'Izaac')
    }
  return (


    <Body>


  <Main>

        <Titulo>useState</Titulo>
    <ChangeContainer>

        <Result>
            {name}
        </Result>
        <Button onClick={handleChangeName}>Alterar</Button>
    </ChangeContainer>
   
  </Main>
  
    </Body>
  )
}

export {UseState};