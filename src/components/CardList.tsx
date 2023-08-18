import Card, { CardProps } from "./Card";

const CardList: React.FC<{cards: CardProps[]}> = ({ cards }) => {
  return (
    <div className="cards-container mt-4 grid grid-cols-cards gap-6">
      {cards.map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </div>
  );
}

export default CardList;