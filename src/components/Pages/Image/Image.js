import React from 'react';
import Gallery from 'react-photo-gallery'

let photos = [
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
    const [state, setState] = React.useState({
        photos
    });
    const loadMore = () => {
        setState({photos:state.photos.concat(state.photos)})
    }

    return (
        <div>
            <Gallery photos={state.photos} direction={"column"}/>
            <button onClick={() => loadMore()} style={{zIndex:'900',marginBottom:'100px',overflow:'visible'}}>Load More</button>
        </div>
    );
}

export default Image;
