import React from 'react';
import {Link} from "react-router-dom";


const Soda = () => {

    return (
        <div>
            <h1>Soda!</h1>
            <iframe src="https://giphy.com/embed/mFmuXkziY2RsQ"
             width="480" height="335" frameBorder="0" 
              allowFullScreen>
            </iframe>
            <p><a href="https://giphy.com/gifs/meme-image-know-mFmuXkziY2RsQ">via GIPHY</a></p>
            <Link to="/">Go Back</Link>
        </div>
    );

};

export default Soda;