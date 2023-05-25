import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

export default function ItemList({ id, title, image, category, count }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text>
                        Stock: {count}
                    </Card.Text>
                    <Alert.Link href={`/item/${id}`}>
                        <Button variant="primary">Go somewhere</Button>
                    </Alert.Link>
                </Card.Body>
            </Card>
        </>
    )
}
