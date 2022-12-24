import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, 
    ImageBackground, 
    Content, UserInfo, 
    UserPicture, 
    PostInfo, 
    HasInfo
} from './styles'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://broadwayinfosys.com/blog/wp-content/uploads/2018/12/reacth-js-trends-in-2019.png"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/107082114?s=400&u=848fa8fb855284dfd7c432e45a5e9a02bb48a814&v=4"/>
                <div>
                    <h4>Izaac Sanches</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito com o curso de html e css no bootcamp dio da Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}