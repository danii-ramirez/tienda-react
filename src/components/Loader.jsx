import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-auto'>
                    <Spinner animation="border" />
                </div>
            </div>
        </div>
    )
}