import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
    let photos;
    
    if (props.data.length > 0) {
        photos = props.data.map((photo) => {
        const urlSource = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
        return <Photo url={urlSource} key={photo.id} desc={photo.title} />;
    });
    } else {
        photos = <NotFound />;
    }

    return (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
    </div>
    );
};

export default PhotoContainer;