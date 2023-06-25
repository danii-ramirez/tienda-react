import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Item({ id, title, img, price, discount, stock }) {
    return (
        <div className='col-auto'>
            <Card style={{ height: '30rem', width: '20rem' }}>
                <Card.Img variant='top' src={img} height='70%' />
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text>
                        <span style={{ marginRight: '50px' }}>Price: ${price}</span>
                        {
                            discount > 0 &&
                            <span>Discount: ${discount}</span>
                        }
                    </Card.Text>
                    <Card.Text>
                        <span>Stock: {stock}</span>
                    </Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button variant='primary'>Comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
