import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = (props) => {
    return (
        <LazyLoadImage
            effect="blur"
            placeholderSrc='/placeholder.png'
            {...props} />
    );
};

export default Image;
