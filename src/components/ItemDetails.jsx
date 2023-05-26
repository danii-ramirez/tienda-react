import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

export default function ItemDetails({ title, price, description, image, rating }) {
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <span>Stock: ${rating.count}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>Price: ${price}</span>
                    </Card.Text>

                    <ItemCount stock={rating.count} />
                </Card.Body>
            </Card>
        </>
    )
}