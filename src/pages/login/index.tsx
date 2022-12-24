import { MdEmail, MdLock } from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

import { api } from '../../services/api';
import { Container, Wrapper, Column, Row, Title, Subtitle, TitleLogin, SubtitleLogin, EsqueciText, CriarText} from './styles';
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {

    const navigate = useNavigate( );


    const { control,  handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }

        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
    <Header/>
    <Container>
        <Column>
            <Title>
                “Você pode criar qualquer coisa: basta escrever” &minus; C. S. Lewis
            <div>
                <br/>
                <hr/>
            </div>
            </Title>

            <Subtitle variant="primary">
                Desenvolvido por: <Subtitle>Izaac Sanches de Araujo</Subtitle>
            </Subtitle>
        </Column>

        <Column>
            <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary" type="submit"></Button>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
        
    </Container>
</>)
};

export {Login}