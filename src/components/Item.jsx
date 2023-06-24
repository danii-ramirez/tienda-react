import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

export default function Item({ id, title, img, price }) {
    return (
        <div className='col-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Alert.Link href={`/item/${id}`}>
                        <Button variant="primary">Comprar</Button>
                    </Alert.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
