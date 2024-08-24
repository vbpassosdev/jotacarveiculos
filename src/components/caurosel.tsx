import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const carros : string[]=[
    "",
    "",
    "",
     ]

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carros.map(item=>(
        <Carousel.Item className="d-block w-100 custom-carousel-img">
            <img
                className="d-block w-100"
                src={item}
            />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
