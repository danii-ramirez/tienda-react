import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

export default function ItemDetails({ title, price, detail, img, stock }) {
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                    <Card.Text>
                        <span>Stock: ${stock}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>Price: ${price}</span>
                    </Card.Text>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
        </>
    )
}
