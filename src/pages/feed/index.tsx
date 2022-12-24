import {Header} from '../../components/Header'
import {Card} from '../../components/Card'
import {UserInfo} from '../../components/UserInfo'
import { Container, Title, TitleHighlight, Column} from './styles';

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>

            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={58} nome="Izaac Sanches" image="https://avatars.githubusercontent.com/u/107082114?s=400&u=848fa8fb855284dfd7c432e45a5e9a02bb48a814&v=4"/>

                <UserInfo percentual={87} nome="Izaac Sanches" image="https://avatars.githubusercontent.com/u/107082114?s=400&u=848fa8fb855284dfd7c432e45a5e9a02bb48a814&v=4"/>

                <UserInfo percentual={32} nome="Izaac Sanches" image="https://avatars.githubusercontent.com/u/107082114?s=400&u=848fa8fb855284dfd7c432e45a5e9a02bb48a814&v=4"/>

                <UserInfo percentual={12} nome="Izaac Sanches" image="https://avatars.githubusercontent.com/u/107082114?s=400&u=848fa8fb855284dfd7c432e45a5e9a02bb48a814&v=4"/>
            </Column>
        </Container>
</>)
};

export {Feed}