import React from 'react';
import {useState, useEffect} from 'react';
import {Titulo, Main, ChangeContainer, Button, Result, Body} from './styles';

const UseEffect = () => {

    const [name, setName] = useState('Izaac');
    const handleChangeName = () => {
        setName ( prev => prev === 'Renderize' ? 'Renderizado' : 'Renderize')
    }

    useEffect(() => {
        alert('(manipulando efeito de um componente com useEffect)')
    }, [name]);



  return (
    <Body>


  <Main>

        <Titulo>useEffect</Titulo>
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

export {UseEffect};