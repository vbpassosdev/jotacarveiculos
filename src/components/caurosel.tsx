import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const carros : string[]=[
    "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
    "https://cdn.discordapp.com/attachments/1275126834408849505/1275127750025412609/JotaCar2.jpg?ex=66c4c2c2&is=66c37142&hm=a4ad00ca3782ad29bb33c00701128436267e83558d9ec2e5db226ea72ec1588c&",
    "https://cdn.discordapp.com/attachments/1275126834408849505/1275127750436458506/JotaCar3.jpg?ex=66c4c2c2&is=66c37142&hm=5608acf6952d6253e47d65480325bcdfdcd517834cf25fc038aee7ddace7e9b7&",
  ]

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carros.map(item=>(
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={item}
            />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
