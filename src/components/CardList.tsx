import Card, { CardProps } from "./Card";

const CardList: React.FC<{cards: CardProps[]}> = ({ cards }) => {
  return (
    <div className="cards-container mt-4 w-[90vw] md:w-[45vw]">
      {cards.map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </div>
  );
}

export default CardList;