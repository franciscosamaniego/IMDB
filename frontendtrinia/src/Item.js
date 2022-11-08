const Item = props => {
    return (
        <div className="form">
            <h3>{props.Name}</h3>
                <p>Genero: {props.Gender}</p>
                <p>Sinopsis: {props.Sinopsis}</p>
                <p>Calificación: {props.Calif}</p>
        </div>
    )
}

export default Item
