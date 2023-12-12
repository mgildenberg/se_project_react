import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      ></img>
      <div className="card__name-container">
        <p className="card__name">{item.name}</p>
      </div>
    </div>
  );
};

export default ItemCard;
