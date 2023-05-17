const Card = ({title, image, description }) => {
    return (
        <div class = "column-grid">
            <span class = "icon-container icon-big">
                <img
                    class = ""
                    width="48"
                    height="48"
                    src={image}
                    data-src={image}
                    alt={title}
                />
            </span>
            <p class = "title">{title}</p>
            <p class = "description">{description}</p>
        </div>
    );
  };
  
  export default Card;