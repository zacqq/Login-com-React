import React from 'react';
import {useState, useCallback} from 'react';
import {Titulo, Main, ChangeContainer, Button, Result, Body} from './styles';

const UseCallBack = () => {

    const [name, setName] = useState('Izaac');
    const [age, setAge] = useState(24);


    // Callback = referencia de funcao.
    const handleChangeName = useCallback(() => {
      console.log('alterou nome')
      setName(prev => prev === 'Izaac' ? 'SeuNome' : 'Izaac') 
  }, []);


    const handleChangeAge = useCallback(() => {
      const newAge = 10 * age;
      console.log('age atual', age, newAge);
      setAge(prev => prev === 24 ? 30 : 24)
  }, [age]);

  return (
    <Body>


  <Main>

        <Titulo>useCallback</Titulo>
    <ChangeContainer>
          <Result>
                Idade: {age} 
          </Result>
          <Result>
                Nome: {name}
          </Result>
          <Button onClick={handleChangeAge}>Alterar Idade</Button>
          <Button onClick={handleChangeName}>Alterar Nome</Button>
    </ChangeContainer>
   
  </Main>
  
    </Body>
  )
}

export {UseCallBack};