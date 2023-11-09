const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img className="card__image" src={item.link} alt={item.name}></img>
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
