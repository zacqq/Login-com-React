import {useNavigate} from 'react-router-dom';
import {Button} from '../../components/Button'
import bannerImage from '../../assets/banner2.png'
import {Header} from '../../components/Header'
import { Container, Title, TitleHighlight, TextContent, } from './styles';

const Home = () => {

    const navigate = useNavigate( );

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
    <Header/>
    <Container>

        <div>
            <Title>
                Sou o <TitleHighlight>
                        Izaac Sanches.<br/>
                    </TitleHighlight>
                E este é meu projeto em React.JS e TypeScript
            </Title>

            <TextContent>
                Portfolio desenvolvido para dominar e desenvolver as habilidades com a biblioteca React em JavaScript. 
                
                <p><br/>Neste projeto desenvolvi uma tela de login para desenvolver as tecnicas com styled-components.</p>
            </TextContent>
            
            <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
        </div>

        <div>
            <img src={bannerImage} alt="Imagem principal" />
        </div>
        
    </Container>
</>)
};

export {Home}