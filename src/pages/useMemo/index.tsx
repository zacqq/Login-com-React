import React from 'react';
import {useState, useMemo} from 'react';
import {Titulo, Main, ChangeContainer, Button, Result, Body} from './styles';

const UseMemo = () => {

    const [age, setAge] = useState(24);
    const handleChangeName = () => {
        setAge ( prev => prev === 24 ? 30 : 24)
    }


    // useMemo = referencia de variavel (const, var, let)
    const calculo = useMemo(() => {
        console.log('calculou', age)
        return 10 * age;
    }, [age]); 

    console.log('renderizou', calculo);

  return (
    <Body>


  <Main>

        <Titulo>useMemo</Titulo>
    <ChangeContainer>

        <Result>
            {age}
        </Result>
        <Button onClick={handleChangeName}>Alterar</Button>
    </ChangeContainer>
   
  </Main>
  
    </Body>
  )
}

export {UseMemo};