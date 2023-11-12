import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <img
          className="card__image"
          src={item.link}
          alt={item.name}
          onClick={() => onSelectCard(item)}
        ></img>
        <div className="card__name-container">
          <div className="card__name">{item.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
