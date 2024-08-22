import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function GroupCard() {
    const [index] = useState(0);

    const carros : string[]=[
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        "https://cdn.discordapp.com/attachments/1275126834408849505/1275127749496803440/JotaCar.jpg?ex=66c4c2c2&is=66c37142&hm=a33f7fddef59b67f310a3b1b83e3859672b9bdebe4ac6cebbe5fa571ad630bb8&",
        
    ]
    

  return (
    <CardGroup>
        <Row>

        {carros.map(item=>(
        <Col key={index} md={4} className="mb-4">
            <Card>
            <Card.Img variant="top" src={item} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            </Col>

        ))}
      </Row>
        
    </CardGroup>
  );
}
