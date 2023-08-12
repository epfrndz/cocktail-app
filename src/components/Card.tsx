import Image from "next/image";

interface CardProps {
  name: string;
  url: string;
  imagesrc?: string;
}

const Card: React.FC<CardProps> = ({ name, url, imagesrc="https://picsum.photos/100/100" }) => {
  return (
    <a 
    className="card-wrapper block border-2 border-black w-[150px]" 
    href={url}
    >
      <div className="card-image-wrapper w-fit">
        <img src={imagesrc} alt={name} width={100} height={100} />
      </div>
      <div className="card-content-wrapper w-fit">
        <h2 className="card-content w-fit">{name}</h2>
      </div>
    </a>
  );
}

export default Card;