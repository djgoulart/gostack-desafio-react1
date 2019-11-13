import React from 'react';

import './Comment.css';

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

function Comment({author, content, profileImg}) {
    return (
        <div className="comment">
            <img src={`${images[profileImg]}`} alt="profile" />
            <p>
              <strong>{author} </strong>
              {content}
            </p>
        </div>
    );
}

export default Comment;