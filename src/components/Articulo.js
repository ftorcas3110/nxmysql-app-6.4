

function Articulo({ children, articulo }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <div style ={{"display": "block" , "float" : "left"}}>
            <p><strong>{articulo.nombre}</strong></p>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            </div>
            <div style ={{"display": "block", "text-align" : "right"}}>
                <img
                    src={articulo.imagen}
                    style = {{"width" : "100px", "height" : "100px;"}}
                />
            </div>
            {children}
        </div>
    )
}

export default Articulo