export default function ItemSearch() {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-3">
                <input type="text" className="form-control" />
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary">Buscar</button>
            </div>
        </div>
    )
}
