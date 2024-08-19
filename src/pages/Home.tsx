import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export function Home (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: SetStateAction<number>) => {
      setIndex(selectedIndex);
    }
    return(
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img className="d-block w-100"
             src="https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&"
             alt="JotaCar veículos"
            />
                <Carousel.Caption>
                    <h3>JotaCar Veículos</h3>
                    <p>Compra e venda de carros</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
        </>
    )
}