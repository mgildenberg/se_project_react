const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          className="card__image"
          src={item.link}
          alt={item.name}
          onClick={() => onSelectCard(item)}
        ></img>
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
