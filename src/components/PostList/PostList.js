import React, { Component } from 'react';

import Post from './../Post/Post';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Júlio Alcantara',
        img: './julio.png',
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: 'Diego Fernandes',
            img: './profile.png',
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          }
        ]
      },
      {
        id: 2,
        author: 'Gabriel Lisboa',
        img: './gabriel.png',
        date: '04 Jun 2019',
        content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 2,
            author: 'Clara Lisboa',
            img: './clara.png',
            content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 3,
            author: 'Cézar Toledo',
            img: './cesar.png',
            content: 'Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          }
        ]
      },
      {
        id: 3,
        author: 'Gabriel Lisboa',
        img: './gabriel.png',
        date: '04 Jun 2019',
        content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 4,
            author: 'Clara Lisboa',
            img: './clara.png',
            content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 5,
            author: 'Cézar Toledo',
            img: './cesar.png',
            content: 'Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          }
        ]
      }
    ]
  };

  render() {
      return (
        <div className="post-list">
          { this.state.posts.map(post => (
            <Post key={post.id} 
              author={post.author}
              profileImg={post.img} 
              date={post.date}
              content={post.content}
              comments={post.comments}
             />
          ))}
        </div>
      );
  }
}

export default PostList;