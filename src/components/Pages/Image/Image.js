import React from 'react';
import Gallery from 'react-photo-gallery'
const photos = [
    {
        src: 'https://picsum.photos/id/237/200/300',
        width: 1,
        height: 1
    },
    {
        src: 'https://picsum.photos/id/239/400/200',
        width: 2,
        height: 1
    },
    {
        src: 'https://picsum.photos/id/240/200/300',
        width: 3,
        height: 4
    },
    {
        src: 'https://picsum.photos/id/241/200/300',
        width: 1,
        height: 1
    },
    {
        src: 'https://picsum.photos/id/242/200/300',
        width: 2,
        height: 4
    },
    {
        src: 'https://picsum.photos/id/243/200/300',
        width: 1,
        height: 1
    },
    {
        src: 'https://picsum.photos/id/244/200/300',
        width: 1,
        height: 1
    }
];
function Image() {
    return (
        <Gallery photos={photos} direction={"column"}/>
    );
}

export default Image;
