import React from 'react';
import Gallery from 'react-photo-gallery'
import './style.scss' 

let photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
        
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
       
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
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
        <section className="image-gallery">

        <section className="short-info">
            <div className="addon-wrap">
                <h3>
                    WELCOME
                    <small> to flicaf portal</small>
                </h3>
                <p>
                If you cannot provide a valid href, but still need the element to resemble a link
                </p>
            </div>
            <div className="addon-wrap">
                <h3>
                    145,256&nbsp;
                    <small>Photos were uploaded.</small>
                </h3>

            </div>

        </section>
        <div>
            <Gallery photos={state.photos} direction={"row"}/>
            <button onClick={() => loadMore()} style={{zIndex:'900',marginBottom:'100px',overflow:'visible'}}>Load More</button>
        </div>
    </section>
       
    );
}

export default Image;
