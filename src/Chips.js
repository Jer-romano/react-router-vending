import React from 'react';
import {Link} from "react-router-dom";


const Chips = () => {

    return (
        <div>
            <h1>Chips!</h1>
            <iframe src="https://giphy.com/embed/EFUiKHUiZNQUo" width="480" height="320"
             frameBorder="0" 
              allowFullScreen>
            </iframe>
              <p><a href="https://giphy.com/gifs/transparent-kirby-EFUiKHUiZNQUo">via GIPHY</a></p>
            <Link to="/">Go Back</Link>
        </div>
    );

}

export default Chips;