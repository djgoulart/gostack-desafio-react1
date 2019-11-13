import React from 'react';

import './Post.css';

import Comment from './../Comment/Comment';

const images = importImages(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

/**
 * Importa as imagens dinamicamente
 *  Source: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */
function importImages(r) {
  let images = {};

  r.keys().map((item, index) => { images[item.replace('../../', '')] = r(item); });

  return images;
}



function Post({author, profileImg, date, content, comments}) {
  
    return (
      
        <div className="post">
            <div className="post-header">
                <img src={`${images[profileImg]}`} alt="profile" />
                <div className="profile">
                    <span>{author}</span>
                    <small>{date}</small>
                </div>
            </div>
            <p>{content}</p>
            <div className="separator"></div>
            { comments.map(c =>(
              <Comment key={c.id} author={c.author} profileImg={c.img} content={c.content} /> 
            ))}

        </div>
    );
}

export default Post;