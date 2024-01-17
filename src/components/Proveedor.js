function Proveedor({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <div style ={{"display": "block" , "float" : "left"}}>
            <p><strong>{proveedor.nombre}</strong></p>
            <p>{proveedor.telefono}</p>
            </div>
            <div style ={{"display": "block", "text-align" : "right"}}>
                <img
                    src={proveedor.imagen}
                    style = {{"width" : "100px", "height" : "100px;"}}
                />
            </div>
            {children}
        </div>
    )
}

export default Proveedor