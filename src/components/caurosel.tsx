import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const carros : string[]=[
    "https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&",
    "https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&",
    "https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&",
    "https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&",
        
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
