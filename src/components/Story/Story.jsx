import "./Story.css";

function Story({storyName, image, variacion}){
    return(
        <div className="story">
            <img src={image} 
            alt="user" 
            className={`story-image story-image-${variacion}`}
            />
            <p className="story-name">{storyName}</p>
        </div>

    );
}

export default Story;