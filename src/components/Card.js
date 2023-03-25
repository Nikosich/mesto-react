function Card({card, onCardClick}) {

    const handleCardClick = () => {
        onCardClick(card)
      }

  return (
    <li className="places__item">
      <button
        type="button"
        className="delete-button"
        arial-label="удалить"
      ></button>
      <img className="places__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <div className="places__item-name">
        <h2 className="places__name">{card.name}</h2>
        <div className="places__like-container">
          <button
            type="button"
            className="like-button"
            aria-label="нравится"
            aria-pressed="false"
          ></button>
          <span className="like-button__count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
