import { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";
import axios from "axios";

const ItemSelector = () => {
const [ItemArr, setItemArr] = useState([]);
const [DisplayedItems, setDisplayedItems] = useState([]);

const SelectType = (event,Type) => {
    setDisplayedItems(ItemArr.filter(Item => Item.Type === Type).map(item => <Item Name={item.Name} Gender={item.Gender} Sinopsis={item.Sinopsis}  Calif={item.Califs} key={item._id}/> ))
}

    useEffect(() => {
        console.log(DisplayedItems);
    }, [DisplayedItems])

    useEffect(() => {
        axios.get('/movies')
        .then(res => {
            setItemArr(res.data);
        })
        .catch(error => {
            console.error(error)
        })
        }, [])

    return (
        <div>
        <button class="btn btn-danger" onClick={event => SelectType(event, "Pelicula") }>Peliculas</button>
        <button class="btn btn-primary right" onClick={event => SelectType(event, "Serie")}>Series</button>
          <div class="text-center mb-3">
          {DisplayedItems}
          </div>
        </div>
    );
}

export default ItemSelector
