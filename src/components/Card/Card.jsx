const Card = ({ title, image, description }) => {
  return (
    <div className="card" style={{ marginInline: "22px" }}>
      <img src={image} alt={title} style={{ width: "100%", height: "250px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
