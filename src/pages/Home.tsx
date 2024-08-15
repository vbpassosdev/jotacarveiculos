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
                src="https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&"
                alt="First slide"
            />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&"
                alt="First slide"
            />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/1273416357014405213/1273416447342805042/awynorv51k1nab947dksutbos.webp?ex=66be88fb&is=66bd377b&hm=d6b5df74b4033e71409e1fe2987c63daab591af8fae7547de97144303122cc7c&"
                alt="First slide"
            />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}