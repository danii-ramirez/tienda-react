export default function ItemListContainer({ greeting }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                        <h1>{greeting}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
