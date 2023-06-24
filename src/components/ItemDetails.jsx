import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

export default function ItemDetails({ title, detail, img, price, discount, stock }) {
    return (
        <>
            <Card style={{ height: '30rem', width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                    <Card.Text>
                        <span>Price: ${price}</span>
                    </Card.Text>
                    {
                        discount > 0 &&
                        <Card.Text>
                            <span>Discount: ${discount}</span>
                        </Card.Text>
                    }
                    <Card.Text>
                        <span>Stock: {stock}</span>
                    </Card.Text>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
        </>
    )
}
