import React from 'react';
import {Link} from "react-router-dom";


const Pretzels = () => {

    return (
        <div>
            <h1>Pretzels!</h1>
            <iframe src="https://giphy.com/embed/geg3Ltfrc6FZC"
             width="480" height="360" frameBorder="0"
              allowFullScreen>
            </iframe>
            <p><a href="https://giphy.com/gifs/george-costanza-pretzels-geg3Ltfrc6FZC">via GIPHY</a></p>
            <Link to="/">Go Back</Link>
        </div>
    );

}

export default Pretzels;